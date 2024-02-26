package team.emapp.service;

import team.emapp.dto.user.UserRegistrationRequestDto;
import team.emapp.dto.user.UserRegistrationResponseDto;
import team.emapp.exception.RegistrationException;
import team.emapp.model.User;

public interface UserService {
    UserRegistrationResponseDto register(
			UserRegistrationRequestDto registrationRequestDto)
			throws RegistrationException;

    User getAuthenticatedUser();
}
