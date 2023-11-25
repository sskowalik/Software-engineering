package com.api.API.service;

import com.api.API.model.User;

import org.springframework.web.bind.annotation.*;

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