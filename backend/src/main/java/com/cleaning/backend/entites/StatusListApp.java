package com.cleaning.backend.entites;

import jakarta.persistence.*;

@Entity
@Table(name = "status_list_app")
public class StatusListApp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String status;
}
