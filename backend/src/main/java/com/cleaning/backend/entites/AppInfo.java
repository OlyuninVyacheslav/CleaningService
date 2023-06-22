package com.cleaning.backend.entites;

import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@NoArgsConstructor
public class AppInfo {
    private Long id;
    private Timestamp dateOfSubmission;
    private Timestamp dateOfCompletion;
    private String address;
    private String surname;
    private String firstname;
    private String patronymic;
    private String status;
    private String type;
    private int price;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Timestamp getDateOfSubmission() {
        return dateOfSubmission;
    }

    public void setDateOfSubmission(Timestamp dateOfSubmission) {
        this.dateOfSubmission = dateOfSubmission;
    }

    public Timestamp getDateOfCompletion() {
        return dateOfCompletion;
    }

    public void setDateOfCompletion(Timestamp dateOfCompletion) {
        this.dateOfCompletion = dateOfCompletion;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    // Добавьте конструктор, геттеры и сеттеры
}

