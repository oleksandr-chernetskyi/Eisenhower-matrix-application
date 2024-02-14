package team.emapp.security;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import team.emapp.dto.user.UserLoginRequestDto;
import team.emapp.dto.user.UserLoginResponseDto;
import team.emapp.exception.AuthenticationException;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthenticationService {
	private final JwtUtil jwtUtil;
	private final AuthenticationManager authenticationManager;

	public UserLoginResponseDto authenticate(UserLoginRequestDto userLoginRequestDto) {
		final Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						userLoginRequestDto.getEmail(), userLoginRequestDto.getPassword())
		);
		String token = jwtUtil.generateToken(authentication.getName());
		if (token == null || token.isEmpty()) {
			log.error("Token generation failed for user: {}",
					userLoginRequestDto.getEmail());
			throw new AuthenticationException("Authentication failed "
					+ "when authenticate method was called");
		}
		return new UserLoginResponseDto(token);
	}
}
