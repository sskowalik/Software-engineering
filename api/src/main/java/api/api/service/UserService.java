package api.api.service;

import api.api.model.User;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserService {

    User user;

    @GetMapping("{userId}")
    public User getUserDetails(String userId) {
        return user;
    }

    @PostMapping
    public String createUserDetails(@RequestBody User user) {
        this.user = user;
        return "User Created Succesfully";
    }

    @PutMapping
    public String updateUserDetails(@RequestBody User user) {
        this.user = user;
        return "User Updated Succesfully";
    }

    @DeleteMapping("{userId}")
    public String deleteUserDetails(String userId) {
        this.user = null;
        return "User Deleted Succesfully";
    }
}
