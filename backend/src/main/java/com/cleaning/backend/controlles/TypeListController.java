package com.cleaning.backend.controlles;

import com.cleaning.backend.entites.TypeList;
import com.cleaning.backend.services.TypeListService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TypeListController {
    private final TypeListService typeListService;

    public TypeListController( TypeListService typeListService) {
        this.typeListService = typeListService;
    }

    @GetMapping("/types")
    public List<TypeList> getAllTypes() {
        return typeListService.getAllTypes();
    }
}
