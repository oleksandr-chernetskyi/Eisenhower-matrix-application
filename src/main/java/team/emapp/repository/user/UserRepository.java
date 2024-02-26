package team.emapp.repository.user;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import team.emapp.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	@Query("FROM User u LEFT JOIN FETCH u.roles r "
			+ "WHERE u.email = :email "
			+ "AND u.isDeleted = false "
			+ "AND r.isDeleted = false ")
	Optional<User> findByEmail(String email);
}
