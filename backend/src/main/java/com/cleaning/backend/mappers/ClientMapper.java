package com.cleaning.backend.mappers;

import com.cleaning.backend.dtos.ClientDto;
import com.cleaning.backend.dtos.SignUpDto;
import com.cleaning.backend.entites.Client;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ClientMapper {

    ClientDto toClientDto(Client client);

    @Mapping(target = "password", ignore = true)
    Client signUpToClient(SignUpDto signUpDto);

}
