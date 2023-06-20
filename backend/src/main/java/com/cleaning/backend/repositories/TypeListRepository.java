package com.cleaning.backend.repositories;

import com.cleaning.backend.entites.TypeList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeListRepository extends JpaRepository<TypeList, Long> {
}
