package com.cleaning.backend.services.impl;

import com.cleaning.backend.entites.App;
import com.cleaning.backend.repositories.AppRepository;
import com.cleaning.backend.services.AppService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppServiceImpl implements AppService {
    private final AppRepository appRepository;

    public AppServiceImpl(AppRepository appRepository) {
        this.appRepository = appRepository;
    }

    @Override
    public List<App> getAllApps() {
        return appRepository.findAll();
    }

    @Override
    public App getAppById(Long id) {
        return appRepository.findById(id).orElse(null);
    }

    @Override
    public App createApp(App app) {
        return appRepository.save(app);
    }

    @Override
    public App updateApp(App app) {
        return appRepository.save(app);
    }

    @Override
    public void deleteApp(Long id) {
        appRepository.deleteById(id);
    }

    @Override
    public List<App> getAppsByClientId(Long clientId) {
        return appRepository.findByClientId(clientId);
    }
}

