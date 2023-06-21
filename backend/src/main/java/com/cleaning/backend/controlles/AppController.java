package com.cleaning.backend.controlles;

import com.cleaning.backend.config.UserAuthenticationProvider;
import com.cleaning.backend.dtos.ClientDto;
import com.cleaning.backend.entites.*;
import com.cleaning.backend.repositories.BasisListRepository;
import com.cleaning.backend.repositories.ClientRepository;
import com.cleaning.backend.repositories.StatusListAppRepository;
import com.cleaning.backend.repositories.TypeListRepository;
import com.cleaning.backend.services.AppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/apps")
public class AppController {
    private final AppService appService;
    private final UserAuthenticationProvider authenticationProvider;
    private final ClientRepository clientRepository;
    private final TypeListRepository typeListRepository;
    private final BasisListRepository basisListRepository;
    private final StatusListAppRepository statusListAppRepository;

    @Autowired
    public AppController(AppService appService, UserAuthenticationProvider authenticationProvider,
                         ClientRepository clientRepository, TypeListRepository typeListRepository, BasisListRepository basisListRepository, StatusListAppRepository statusListAppRepository) {
        this.appService = appService;
        this.authenticationProvider = authenticationProvider;
        this.clientRepository = clientRepository;
        this.typeListRepository = typeListRepository;
        this.basisListRepository = basisListRepository;
        this.statusListAppRepository = statusListAppRepository;
    }

    @GetMapping
    public ResponseEntity<List<AppInfo>> getAllApps(@RequestHeader("Authorization") String token) {
        try {
            String jwtToken = token.substring(7);
            Authentication authentication = authenticationProvider.validateToken(jwtToken);
            Long clientId = ((ClientDto) authentication.getPrincipal()).getId();
            List<App> apps = appService.getAppsByClientId(clientId);
            List<AppInfo> info = new ArrayList<>();
            apps.forEach(app -> {
                AppInfo appinfo = new AppInfo();
                appinfo.setId(app.getId());
                appinfo.setDateOfSubmission(app.getDateOfSubmission());
                appinfo.setDateOfCompletion(app.getDateOfCompletion());
                appinfo.setAddress(app.getAddress());
                appinfo.setSurname(app.getSurname());
                appinfo.setFirstname(app.getFirstname());
                appinfo.setPatronymic(app.getPatronymic());
                Long status_id = app.getStatus().getId();
                appinfo.setStatus(statusListAppRepository.findById(status_id).get().getStatus());
                Long type_id = app.getType().getId();
                appinfo.setType(typeListRepository.findById(type_id).get().getName());
                info.add(appinfo);
            });

            return new ResponseEntity<>(info, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<App> getAppById(@PathVariable Long id) {
        App app = appService.getAppById(id);
        if (app != null) {
            return new ResponseEntity<>(app, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<App> createApp(@RequestBody AppRequest appRequest, @RequestHeader("Authorization") String token) {
        try {
            String jwtToken = token.substring(7);
            Authentication authentication = authenticationProvider.validateToken(jwtToken);
            Long clientId = ((ClientDto) authentication.getPrincipal()).getId();
            Client client = clientRepository.findById(clientId).get();
            App app = appRequest.getApp();
            app.setClient(client);
            Long type_id = appRequest.getType_id();
            Long basis_id = appRequest.getBasis_id();
            Long status_id = appRequest.getStatus_id();
            TypeList type = typeListRepository.findById(type_id).get();
            BasisList basis = basisListRepository.findById(basis_id).get();
            StatusListApp status = statusListAppRepository.findById(status_id).get();
            app.setType(type);
            app.setBasis(basis);
            app.setStatus(status);
            app.setDateOfSubmission(Timestamp.valueOf(LocalDateTime.now()));
            App createdApp = appService.createApp(app);
            System.out.println("Номер заявки "+app.getId());
            return new ResponseEntity<>(createdApp, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<App> updateApp(@PathVariable Long id, @RequestBody App app, @RequestHeader("Authorization") String token) {
        try {
            String jwtToken = token.substring(7);
            Authentication authentication = authenticationProvider.validateToken(jwtToken);
            Long clientId = ((ClientDto) authentication.getPrincipal()).getId();
            Client client = clientRepository.findById(clientId).get();
            App existingApp = appService.getAppById(id);
            if (existingApp == null || !existingApp.getClient().equals(client)) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            app.setId(id);
            app.setClient(client);
            App updatedApp = appService.updateApp(app);
            return ResponseEntity.ok(updatedApp);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApp(@PathVariable Long id, @RequestHeader("Authorization") String token) {
        try {
            String jwtToken = token.substring(7);
            Authentication authentication = authenticationProvider.validateToken(jwtToken);
            Long clientId = ((ClientDto) authentication.getPrincipal()).getId();
            Client client = clientRepository.findById(clientId).get();
            App existingApp = appService.getAppById(id);
            if (existingApp == null || !existingApp.getClient().equals(client)) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            }
            appService.deleteApp(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }
}


