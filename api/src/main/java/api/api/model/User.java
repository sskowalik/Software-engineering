package api.api.model;

import java.time.LocalDate;

public class User {
    private int UserId;
    private String Email;
    private String Password;
    private String Name;
    private String SecondName;
    private String Surname;
    private LocalDate DateOfBirth;
    private int Pesel;
    private String Birthplace;
    private String Domicile;
    private String MothersName;
    private String FathersName;

    public int getUserId() {
        return UserId;
    }

    public void setUserId(int userId) {
        UserId = userId;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getPassword() {
        return Password;
    }

    public void setPassword(String password) {
        Password = password;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public String getSecondName() {
        return SecondName;
    }

    public void setSecondName(String secondName) {
        SecondName = secondName;
    }

    public String getSurname() {
        return Surname;
    }

    public void setSurname(String surname) {
        Surname = surname;
    }

    public LocalDate getDateOfBirth() {
        return DateOfBirth;
    }

    public void setDateOfBirth(LocalDate dateOfBirth) {
        DateOfBirth = dateOfBirth;
    }

    public int getPesel() {
        return Pesel;
    }

    public void setPesel(int pesel) {
        Pesel = pesel;
    }

    public String getBirthplace() {
        return Birthplace;
    }

    public void setBirthplace(String birthplace) {
        Birthplace = birthplace;
    }

    public String getDomicile() {
        return Domicile;
    }

    public void setDomicile(String domicile) {
        Domicile = domicile;
    }

    public String getMothersName() {
        return MothersName;
    }

    public void setMothersName(String mothersName) {
        MothersName = mothersName;
    }

    public String getFathersName() {
        return FathersName;
    }

    public void setFathersName(String fathersName) {
        FathersName = fathersName;
    }

    public User() {
    }

    public User(int userId, String email, String password, String name, String secondName, String surname,
            LocalDate dateOfBirth, int pesel, String birthplace, String domicile, String mothersName,
            String fathersName) {
        UserId = userId;
        Email = email;
        Password = password;
        Name = name;
        SecondName = secondName;
        Surname = surname;
        DateOfBirth = dateOfBirth;
        Pesel = pesel;
        Birthplace = birthplace;
        Domicile = domicile;
        MothersName = mothersName;
        FathersName = fathersName;
    }

}
