package com.cleaning.backend.controlles;

import com.cleaning.backend.entites.App;
import com.cleaning.backend.entites.AppContent;
import com.cleaning.backend.entites.AppContentRequest;
import com.cleaning.backend.entites.Service;
import com.cleaning.backend.repositories.AppRepository;
import com.cleaning.backend.repositories.ServiceRepository;
import com.cleaning.backend.services.AppContentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/appcontent")
public class AppContentController {

    private final AppContentService appContentService;
    private final AppRepository appRepository;
    private final ServiceRepository serviceRepository;

    @Autowired
    public AppContentController(AppContentService appContentService, AppRepository appRepository, ServiceRepository serviceRepository) {
        this.appContentService = appContentService;
        this.appRepository = appRepository;
        this.serviceRepository = serviceRepository;
    }

    @PostMapping
    public ResponseEntity<AppContent> createAppContent(@RequestBody AppContentRequest appContentRequest) {
        AppContent appContent = appContentRequest.getAppContent();
        Long app_id = appContentRequest.getApp_id();
        Long service_id = appContentRequest.getService_id();
        App app = appRepository.findById(app_id).get();
        Service service = serviceRepository.findById(service_id).get();
        appContent.setApp(app);
        appContent.setService(service);
        AppContent createdAppContent = appContentService.createAppContent(appContent);
        return new ResponseEntity<>(createdAppContent, HttpStatus.CREATED);
    }

    @GetMapping("/byappid/{appId}")
    public ResponseEntity<List<AppContent>> getAllAppContentByAppId(@PathVariable Long appId) {
        List<AppContent> appContentList = appContentService.getAllAppContentByAppId(appId);
        return ResponseEntity.ok(appContentList);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAppContent(@PathVariable Long id) {
        appContentService.deleteAppContent(id);
        return ResponseEntity.noContent().build();
    }

}
