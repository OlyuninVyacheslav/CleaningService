package com.cleaning.backend.repositories;
import com.cleaning.backend.entites.Profile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProfileRepository extends JpaRepository<Profile, Long> {
    List<Profile> findByClientId(Long clientId);
}
