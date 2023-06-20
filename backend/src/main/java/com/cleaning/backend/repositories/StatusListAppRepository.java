package com.cleaning.backend.repositories;

import com.cleaning.backend.entites.StatusListApp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StatusListAppRepository extends JpaRepository<StatusListApp, Long> {
}
