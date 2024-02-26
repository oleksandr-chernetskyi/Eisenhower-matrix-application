package team.emapp.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import team.emapp.dto.user.UserLoginRequestDto;
import team.emapp.dto.user.UserLoginResponseDto;
import team.emapp.dto.user.UserRegistrationRequestDto;
import team.emapp.dto.user.UserRegistrationResponseDto;
import team.emapp.exception.RegistrationException;
import team.emapp.security.AuthenticationService;
import team.emapp.service.UserService;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
@Tag(name = "Authentication Controller")
public class AuthenticationController {
	private final UserService userService;
	private final AuthenticationService authenticationService;

	@Operation(summary = "Registration a new user")
	@PostMapping("/registration")
	public UserRegistrationResponseDto register(@RequestBody @Valid
			UserRegistrationRequestDto userRegistrationRequestDto)
			throws RegistrationException {
		log.info("Received information about registration user with email: {}",
				userRegistrationRequestDto.getEmail());
		return userService.register(userRegistrationRequestDto);
	}

	@Operation(summary = "Login of existing user")
	@PostMapping("/login")
	public UserLoginResponseDto login(@RequestBody UserLoginRequestDto userLoginRequestDto) {
		log.info("Received login request for user with email: {}",
				userLoginRequestDto.getEmail());
		return authenticationService.authenticate(userLoginRequestDto);
	}
}
