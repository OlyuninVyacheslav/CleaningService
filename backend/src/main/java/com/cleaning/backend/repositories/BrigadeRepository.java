package com.cleaning.backend.repositories;

import com.cleaning.backend.entites.Brigade;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrigadeRepository extends JpaRepository<Brigade, Long> {

}
