package com.cleaning.backend.services.impl;

import com.cleaning.backend.entites.AppContent;
import com.cleaning.backend.repositories.AppContentRepository;
import com.cleaning.backend.services.AppContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppContentServiceImpl implements AppContentService {

    private final AppContentRepository appContentRepository;

    @Autowired
    public AppContentServiceImpl(AppContentRepository appContentRepository) {
        this.appContentRepository = appContentRepository;
    }

    @Override
    public AppContent createAppContent(AppContent appContent) {
        return appContentRepository.save(appContent);
    }

    @Override
    public List<AppContent> getAllAppContentByAppId(Long appId) {
        return appContentRepository.findAllByAppId(appId);
    }

    @Override
    public void deleteAppContent(Long id) {
        appContentRepository.deleteById(id);
    }

}

