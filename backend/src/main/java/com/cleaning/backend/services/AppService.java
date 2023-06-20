package com.cleaning.backend.services;

import com.cleaning.backend.entites.App;
import com.cleaning.backend.entites.Profile;

import java.util.List;

public interface AppService {
    List<App> getAllApps();
    App getAppById(Long id);
    App createApp(App app);
    App updateApp(App app);
    void deleteApp(Long id);
    List<App> getAppsByClientId(Long clientId);
}

