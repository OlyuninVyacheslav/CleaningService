package com.cleaning.backend.repositories;

import com.cleaning.backend.entites.App;
import com.cleaning.backend.entites.Profile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppRepository extends JpaRepository<App, Long> {
    List<App> findByClientId(Long clientId);

}
