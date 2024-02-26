package team.emapp.service.impl;

import java.util.HashSet;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import team.emapp.dto.user.UserRegistrationRequestDto;
import team.emapp.dto.user.UserRegistrationResponseDto;
import team.emapp.exception.EntityNotFoundException;
import team.emapp.exception.RegistrationException;
import team.emapp.mapper.user.UserMapper;
import team.emapp.model.Role;
import team.emapp.model.User;
import team.emapp.repository.role.RoleRepository;
import team.emapp.repository.user.UserRepository;
import team.emapp.service.UserService;

@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
	private final UserRepository userRepository;
	private final RoleRepository roleRepository;
	private final PasswordEncoder passwordEncoder;
	private final UserMapper userMapper;

	@Override
	public UserRegistrationResponseDto register(
			UserRegistrationRequestDto registrationRequestDto)
			throws RegistrationException {
		if (userRepository.findByEmail(registrationRequestDto.getEmail()).isPresent()) {
			log.error("Registration method error. "
					+ "Unable to registration with current parameters: {}",
					registrationRequestDto.getEmail());
			throw new RegistrationException("Failed to complete registration");
		}
		User user = new User();
		user.setEmail(registrationRequestDto.getEmail());
		user.setPassword(passwordEncoder.encode(registrationRequestDto.getPassword()));
		user.setFirstName(registrationRequestDto.getFirstName());
		user.setLastName(registrationRequestDto.getLastName());

		Role userRole = roleRepository.findRoleByName(Role.RoleName.USER)
				.orElseThrow(() -> {
					log.error("Can't find role by user for registration request: {}",
							registrationRequestDto);
					return new RegistrationException("Can't find role by user");
				});
		Set<Role> userSetRole = new HashSet<>();
	    userSetRole.add(userRole);
        user.setRoles(userSetRole);
        return userMapper.toDto(userRepository.save(user));
	}

	@Override
	public User getAuthenticatedUser() {
		Authentication authentication =
				SecurityContextHolder.getContext().getAuthentication();
		return userRepository.findByEmail(authentication.getName())
				.orElseThrow(() -> {
					log.error("GetAuthenticatedUser method failed. "
									+ "Can't find user by email: {}",
							authentication.getName());
					return new EntityNotFoundException(
							"Can't find user by email: "
									+ authentication.getName());
				});
	}

}
