package com.cleaning.backend.services;

import com.cleaning.backend.entites.TypeList;

import java.util.List;

public interface TypeListService {
    List<TypeList> getAllTypes();

    TypeList getByTypeId(Long id);
}
