package com.cleaning.backend.services;

import com.cleaning.backend.entites.AppContent;

import java.util.List;

public interface AppContentService {

    AppContent createAppContent(AppContent appContent);

    List<AppContent> getAllAppContentByAppId(Long appId);

    void deleteAppContent(Long id);

}

