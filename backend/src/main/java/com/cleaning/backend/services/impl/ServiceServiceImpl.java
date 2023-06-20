package com.cleaning.backend.services.impl;


import com.cleaning.backend.repositories.ServiceRepository;
import com.cleaning.backend.services.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ServiceServiceImpl implements ServiceService {
    private final ServiceRepository serviceRepository;

    @Autowired
    public ServiceServiceImpl(ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;
    }

    @Override
    public List<com.cleaning.backend.entites.Service> getAllServices() {
        return serviceRepository.findAll();
    }
}
