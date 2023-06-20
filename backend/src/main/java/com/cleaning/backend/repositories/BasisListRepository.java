package com.cleaning.backend.repositories;

import com.cleaning.backend.entites.BasisList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasisListRepository extends JpaRepository<BasisList, Long> {
}
