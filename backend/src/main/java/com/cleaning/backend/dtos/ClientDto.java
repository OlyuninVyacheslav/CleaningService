package com.cleaning.backend.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClientDto {
    private Long id;
    private String email;
    private String password;
    private String surname;
    private String firstname;
    private String patronymic;
    private String token;
}
