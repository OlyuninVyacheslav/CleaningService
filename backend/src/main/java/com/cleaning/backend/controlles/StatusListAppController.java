package com.cleaning.backend.controlles;


import com.cleaning.backend.entites.StatusListApp;
import com.cleaning.backend.services.StatusListAppService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StatusListAppController {
    private final StatusListAppService statusListAppService;

    public StatusListAppController(StatusListAppService statusListAppService) {
        this.statusListAppService = statusListAppService;
    }


    @GetMapping("/statusapp")
    public List<StatusListApp> getAllStatus() {
        return statusListAppService.getAllStatus();
    }
}
