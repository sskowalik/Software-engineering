package com.api.API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.api.API.model.user.*;
import com.api.API.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return new ResponseEntity<>(userService.getAllUsers(), HttpStatus.OK);
    }

    // @PostMapping
    // public String createUserDetails(@RequestBody User user) {
    // this.user = user;
    // return "User Created Succesfully";
    // }

    // @PutMapping
    // public String updateUserDetails(@RequestBody User user) {
    // this.user = user;
    // return "User Updated Succesfully";
    // }

    // @DeleteMapping("{userId}")
    // public String deleteUserDetails(String userId) {
    // this.user = null;
    // return "User Deleted Succesfully";
    // }
}