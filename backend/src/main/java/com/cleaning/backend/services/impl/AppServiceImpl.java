package com.cleaning.backend.services.impl;

import com.cleaning.backend.entites.App;
import com.cleaning.backend.entites.AppContent;
import com.cleaning.backend.entites.TypeList;
import com.cleaning.backend.repositories.AppContentRepository;
import com.cleaning.backend.repositories.AppRepository;
import com.cleaning.backend.repositories.ServiceRepository;
import com.cleaning.backend.repositories.TypeListRepository;
import com.cleaning.backend.services.AppService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppServiceImpl implements AppService {
    private final AppRepository appRepository;
    private final AppContentRepository appContentRepository;

    public AppServiceImpl(AppRepository appRepository, AppContentRepository appContentRepository) {
        this.appRepository = appRepository;
        this.appContentRepository = appContentRepository;
    }

    @Override
    public List<App> getAllApps() {
        return appRepository.findAll();
    }

    @Override
    public App getAppById(Long id) {
        return appRepository.findById(id).orElse(null);
    }

    @Override
    public App createApp(App app) {
        return appRepository.save(app);
    }

    @Override
    public App updateApp(App app) {
        return appRepository.save(app);
    }

    @Override
    public void deleteApp(Long id) {
        appRepository.deleteById(id);
    }

    @Override
    public List<App> getAppsByClientId(Long clientId) {
        return appRepository.findByClientId(clientId);
    }
    @Override
    public int getAmount(Long id) {
        int price = 0;
        List<AppContent> content = appContentRepository.findAllByAppId(id);
        for (int i = 0; i < content.size(); i++)
        {
            price += content.get(i).getCount() * content.get(i).getService().getPrice();
        }
        TypeList type = appRepository.findById(id).get().getType();
        price += type.getPrice() * appRepository.findById(id).get().getSquare();
        return price;
    }
}

