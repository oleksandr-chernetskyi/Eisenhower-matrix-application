package team.emapp.mapper.user;

import org.mapstruct.Mapper;
import team.emapp.config.MapperConfig;
import team.emapp.dto.user.UserRegistrationRequestDto;
import team.emapp.dto.user.UserRegistrationResponseDto;
import team.emapp.model.User;

@Mapper(config = MapperConfig.class)
public interface UserMapper {
    UserRegistrationResponseDto toDto(User user);

    User toModel(UserRegistrationRequestDto userRegistrationRequestDto);
}
