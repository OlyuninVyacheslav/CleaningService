package com.cleaning.backend.repositories;

import com.cleaning.backend.entites.StatusListBrigade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusListBrigadeRepository extends JpaRepository<StatusListBrigade, Long> {
    // Дополнительные методы, если необходимо
}

