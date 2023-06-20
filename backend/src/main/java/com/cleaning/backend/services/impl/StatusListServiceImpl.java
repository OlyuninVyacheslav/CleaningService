package com.cleaning.backend.services.impl;

import com.cleaning.backend.entites.StatusListApp;
import com.cleaning.backend.repositories.StatusListAppRepository;
import com.cleaning.backend.services.StatusListAppService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StatusListServiceImpl implements StatusListAppService {
    private final StatusListAppRepository statusListAppRepository;

    public StatusListServiceImpl(StatusListAppRepository statusListAppRepository) {
        this.statusListAppRepository = statusListAppRepository;
    }

    @Override
    public List<StatusListApp> getAllStatus() {
        return null;
    }
}
