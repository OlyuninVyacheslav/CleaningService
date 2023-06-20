package com.cleaning.backend.controlles;

import com.cleaning.backend.entites.BasisList;
import com.cleaning.backend.services.BasisListService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BasisListController {
    private final BasisListService basisListService;

    public BasisListController( BasisListService basisListService) {
        this.basisListService = basisListService;
    }

    @GetMapping("/basis")
    public List<BasisList> getAllBasis() {
        return basisListService.getAllBasis();
    }
}
