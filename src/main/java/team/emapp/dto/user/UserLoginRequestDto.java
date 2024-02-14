package team.emapp.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
@NotNull
public class UserLoginRequestDto {
    @Email
    @Size(min = 11, max = 30)
    private String email;

    @Size(min = 6, max = 30)
    private String password;
}
