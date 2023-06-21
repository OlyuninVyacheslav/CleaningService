package com.cleaning.backend.entites;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.sql.Timestamp;

@Entity
@Table(name = "app")
public class App {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String address;

    @Column(name = "telephone_cl")
    private String telephone;

    @Column(name = "surname_cl")
    private String surname;

    @Column(name = "firstname_cl")
    private String firstname;

    @Column(name = "patronymic_cl")
    private String patronymic;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "client_id", nullable = true)
    @JsonIgnore
    private Client client;

    @Column(name = "date_of_sub", columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp dateOfSubmission;

    @Column(name = "date_of_comp")
    private Timestamp dateOfCompletion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "status_id", nullable = true, columnDefinition = "INT DEFAULT 1")
    @JsonIgnore
    private StatusListApp status;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "basis_id", nullable = true)
    @JsonIgnore
    private BasisList basis;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "brigade_id", nullable = true)
    @JsonIgnore
    private Brigade brigade;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "type_id", nullable = true)
    @JsonIgnore
    private TypeList type;

    @Column
    private Integer square;

    @Column
    private String notes;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
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

    public Client getClient() {
        return client;
    }

    public void setClient(Client client) {
        this.client = client;
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

    public StatusListApp getStatus() {
        return status;
    }

    public void setStatus(StatusListApp status) {
        this.status = status;
    }

    public BasisList getBasis() {
        return basis;
    }

    public void setBasis(BasisList basis) {
        this.basis = basis;
    }

    public Brigade getBrigade() {
        return brigade;
    }

    public void setBrigade(Brigade brigade) {
        this.brigade = brigade;
    }

    public TypeList getType() {
        return type;
    }

    public void setType(TypeList type) {
        this.type = type;
    }

    public Integer getSquare() {
        return square;
    }

    public void setSquare(Integer square) {
        this.square = square;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}

