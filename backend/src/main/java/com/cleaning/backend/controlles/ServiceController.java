package com.cleaning.backend.controlles;

import com.cleaning.backend.entites.Service;
import com.cleaning.backend.services.ServiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ServiceController {
    private final ServiceService serviceService;

    @Autowired
    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @GetMapping("/services")
    public List<Service> getAllServices() {
        return serviceService.getAllServices();
    }
}
