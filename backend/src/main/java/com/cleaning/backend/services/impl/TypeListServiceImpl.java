package com.cleaning.backend.services.impl;

import com.cleaning.backend.entites.TypeList;
import com.cleaning.backend.repositories.TypeListRepository;
import com.cleaning.backend.services.TypeListService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeListServiceImpl implements TypeListService {
    private final TypeListRepository typeListRepository;

    public TypeListServiceImpl(TypeListRepository typeListRepository) {
        this.typeListRepository = typeListRepository;
    }

    @Override
    public List<TypeList> getAllTypes() {
        return typeListRepository.findAll();
    }

    @Override
    public TypeList getByTypeId(Long id) {
        return typeListRepository.findById(id).orElse(null);
    }
}
