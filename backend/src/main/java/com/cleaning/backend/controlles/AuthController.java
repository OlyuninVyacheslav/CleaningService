package com.cleaning.backend.controlles;

import com.cleaning.backend.config.UserAuthenticationProvider;
import com.cleaning.backend.dtos.ClientDto;
import com.cleaning.backend.dtos.CredentialsDto;
import com.cleaning.backend.dtos.SignUpDto;
import com.cleaning.backend.services.ClientService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RequiredArgsConstructor
@RestController
public class AuthController {

    private final ClientService clientService;
    private final UserAuthenticationProvider userAuthenticationProvider;

    private Long id;

    @PostMapping("/login")
    public ResponseEntity<ClientDto> login(@RequestBody @Valid CredentialsDto credentialsDto) {
        ClientDto clientDto = clientService.login(credentialsDto);
        clientDto.setToken(userAuthenticationProvider.createToken(clientDto.getEmail()));
        id = clientDto.getId();
        return ResponseEntity.ok(clientDto);
    }

    @PostMapping("/register")
    public ResponseEntity<ClientDto> register(@RequestBody @Valid SignUpDto client) {
        ClientDto createdClient = clientService.register(client);
        createdClient.setToken(userAuthenticationProvider.createToken(client.getEmail()));
        id = createdClient.getId();
        return ResponseEntity.created(URI.create("/users/" + createdClient.getId())).body(createdClient);
    }

    @GetMapping ("/getid")
    public Long getClientId() {
        return id;
    }

}