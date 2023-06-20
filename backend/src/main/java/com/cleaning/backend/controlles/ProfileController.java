package com.cleaning.backend.controlles;

import com.cleaning.backend.config.UserAuthenticationProvider;
import com.cleaning.backend.dtos.ClientDto;
import com.cleaning.backend.entites.Client;
import com.cleaning.backend.entites.Profile;
import com.cleaning.backend.repositories.ClientRepository;
import com.cleaning.backend.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/profiles")
public class ProfileController {
    private final ProfileService profileService;
    private final UserAuthenticationProvider authenticationProvider;
    private final ClientRepository clientRepository;

    @Autowired
    public ProfileController(ProfileService profileService, UserAuthenticationProvider authenticationProvider,
                             ClientRepository clientRepository) {
        this.profileService = profileService;
        this.authenticationProvider = authenticationProvider;
        this.clientRepository = clientRepository;
    }

    @GetMapping
    public ResponseEntity<List<Profile>> getAllProfiles(@RequestHeader("Authorization") String token) {
        try {
            // Извлекаем токен из заголовка Authorization
            String jwtToken = token.substring(7); // Предполагается, что токен имеет формат "Bearer <токен>"

            // Проверяем токен и получаем аутентифицированного клиента
            Authentication authentication = authenticationProvider.validateToken(jwtToken);

            // Получаем ID аутентифицированного клиента
            Long clientId = ((ClientDto) authentication.getPrincipal()).getId();

            // Получаем профили для аутентифицированного клиента
            List<Profile> profiles = profileService.getProfilesByClientId(clientId);
            return new ResponseEntity<>(profiles, HttpStatus.OK);
        } catch (Exception e) {
            // Проверка токена не удалась или произошла другая ошибка
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Profile> getProfileById(@PathVariable Long id) {
        Profile profile = profileService.getProfileById(id);
        if (profile != null) {
            return new ResponseEntity<>(profile, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Profile> createProfile(@RequestBody Profile profile, @RequestHeader("Authorization") String token) {
        try {
            // Извлекаем токен из заголовка Authorization
            String jwtToken = token.substring(7); // Предполагается, что токен имеет формат "Bearer <токен>"

            // Проверяем токен и получаем аутентифицированного клиента
            Authentication authentication = authenticationProvider.validateToken(jwtToken);

            // Получаем ID аутентифицированного клиента
            Long clientId = ((ClientDto) authentication.getPrincipal()).getId();

            Client client = clientRepository.findById(clientId).get();

            // Устанавливаем ID клиента в профиль
            profile.setClient(client);

            Profile createdProfile = profileService.createProfile(profile);
            return new ResponseEntity<>(createdProfile, HttpStatus.CREATED);
        } catch (Exception e) {
            // Проверка токена не удалась или произошла другая ошибка
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<Profile> updateProfile(@PathVariable Long id, @RequestBody Profile profile) {
        Profile existingProfile = profileService.getProfileById(id);
        if (existingProfile != null) {
            profile.setId(id);
            Profile updatedProfile = profileService.updateProfile(profile);
            return new ResponseEntity<>(updatedProfile, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProfile(@PathVariable Long id) {
        Profile existingProfile = profileService.getProfileById(id);
        if (existingProfile != null) {
            profileService.deleteProfile(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}