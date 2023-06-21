package com.cleaning.backend.repositories;

import com.cleaning.backend.entites.AppContent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppContentRepository extends JpaRepository<AppContent, Long> {
    List<AppContent> findAllByAppId(Long appId);
}

