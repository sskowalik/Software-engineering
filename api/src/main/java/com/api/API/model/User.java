package com.api.API.model;

import java.time.LocalDate;

public class User {
    private int userId;
    private String email;
    private String password;
    private String name;
    private String secondName;
    private String surname;
    private LocalDate dateOfBirth;
    private int pesel;
    private String birthplace;
    private String domicile;
    private String mothersName;
    private String fathersName;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public LocalDate getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public int getPesel() {
        return pesel;
    }

    public void setPesel(int pesel) {
        this.pesel = pesel;
    }

    public String getBirthplace() {
        return birthplace;
    }

    public void setBirthplace(String birthplace) {
        this.birthplace = birthplace;
    }

    public String getDomicile() {
        return domicile;
    }

    public void setDomicile(String domicile) {
        this.domicile = domicile;
    }

    public String getMothersName() {
        return mothersName;
    }

    public void setMothersName(String mothersName) {
        this.mothersName = mothersName;
    }

    public String getFathersName() {
        return fathersName;
    }

    public void setFathersName(String fathersName) {
        this.fathersName = fathersName;
    }

    public User() {
    }

    public User(int userId, String email, String password, String name, String secondName, String surname,
            LocalDate dateOfBirth, int pesel, String birthplace, String domicile, String mothersName,
            String fathersName) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.name = name;
        this.secondName = secondName;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.pesel = pesel;
        this.birthplace = birthplace;
        this.domicile = domicile;
        this.mothersName = mothersName;
        this.fathersName = fathersName;
    }

}