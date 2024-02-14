package team.emapp.dto.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import team.emapp.validation.PasswordMatch;

@Data
@NotNull
@PasswordMatch(
        field = "password",
        fieldMatch = "repeatPassword",
        message = "Password and repeat password shouldn't be empty. Also be equal")
public class UserRegistrationRequestDto {
    @Email
    @Size(min = 11, max = 30)
    private String email;

    @Size(min = 6, max = 30)
    private String password;

    @Size(min = 6, max = 30)
    private String repeatPassword;

    private String firstName;

    private String lastName;
}
