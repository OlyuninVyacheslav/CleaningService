package com.cleaning.backend.repositories;

import com.cleaning.backend.entites.Service;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServiceRepository extends JpaRepository<Service, Long> {
    // Здесь можно добавить дополнительные методы для запросов к таблице service
}
