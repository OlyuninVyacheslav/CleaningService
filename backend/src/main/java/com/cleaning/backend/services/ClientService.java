package com.cleaning.backend.services;

import com.cleaning.backend.dtos.ClientDto;
import com.cleaning.backend.dtos.CredentialsDto;
import com.cleaning.backend.dtos.SignUpDto;
import com.cleaning.backend.entites.Client;
import com.cleaning.backend.exceptions.AppException;
import com.cleaning.backend.mappers.ClientMapper;
import com.cleaning.backend.repositories.ClientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ClientService {
    private final ClientRepository clientRepository;

    private final PasswordEncoder passwordEncoder;

    private final ClientMapper clientMapper;

    public ClientDto login(CredentialsDto credentialsDto) {
        Client client = clientRepository.findByEmail(credentialsDto.getEmail())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), client.getPassword())) {
            return clientMapper.toClientDto(client);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public ClientDto register(SignUpDto clientDto) {
        Optional<Client> optionalClient = clientRepository.findByEmail(clientDto.getEmail());

        if (optionalClient.isPresent()) {
            throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
        }

        Client client = clientMapper.signUpToClient(clientDto);
        client.setPassword(passwordEncoder.encode(CharBuffer.wrap(clientDto.getPassword())));

        Client savedClient = clientRepository.save(client);

        return clientMapper.toClientDto(savedClient);
    }

    public ClientDto findByEmail(String email) {
        Client client = clientRepository.findByEmail(email)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return clientMapper.toClientDto(client);
    }
}
