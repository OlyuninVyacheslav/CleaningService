package com.cleaning.backend.entites;

import jakarta.persistence.*;

@Entity
@Table(name = "brigade")
public class Brigade {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "status_id")
    private StatusListBrigade status;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public StatusListBrigade getStatus() {
        return status;
    }

    public void setStatus(StatusListBrigade status) {
        this.status = status;
    }
}

