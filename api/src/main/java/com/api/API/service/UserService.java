package com.api.API.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.api.API.model.user.User;
import com.api.API.model.user.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<User> getAllUsers() {
        return (List<User>) userRepository.findAll();
    }

    public Optional<User> getUserById(int userId) {
        return userRepository.findById(userId);
    }

    public User createUser(User user) {

        if (user.getEmail() == null || user.getEmail().isEmpty()) {
            throw new IllegalArgumentException("Email cannot be null or empty");
        }

        return userRepository.save(user);
    }

    // public User updateUser(int userId, User updatedUser) {
    // Optional<User> existingUserOptional = userRepository.findById(userId);

    // if (existingUserOptional.isPresent()) {
    // User existingUser = existingUserOptional.get();

    // // Przykładowa logika aktualizacji pól
    // existingUser.setName(updatedUser.getName());
    // existingUser.setSurname(updatedUser.getSurname());
    // // ... inne pola

    // return userRepository.save(existingUser);
    // } else {
    // throw new IllegalArgumentException("User with id " + userId + " not found");
    // }
    // }

    public void deleteUser(int userId) {
        userRepository.deleteById(userId);
    }
}