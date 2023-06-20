package com.cleaning.backend.services.impl;

import com.cleaning.backend.entites.BasisList;
import com.cleaning.backend.repositories.BasisListRepository;
import com.cleaning.backend.services.BasisListService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BasisListServiceImpl implements BasisListService {
    private final BasisListRepository basisListRepository;

    public BasisListServiceImpl(BasisListRepository basisListRepository) {
        this.basisListRepository = basisListRepository;
    }

    @Override
    public List<BasisList> getAllBasis() {
        return basisListRepository.findAll();
    }
}