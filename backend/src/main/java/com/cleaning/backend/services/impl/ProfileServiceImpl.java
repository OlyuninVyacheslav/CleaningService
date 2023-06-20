package com.cleaning.backend.services.impl;

import com.cleaning.backend.entites.Profile;
import com.cleaning.backend.repositories.ProfileRepository;
import com.cleaning.backend.services.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfileServiceImpl implements ProfileService {
    private final ProfileRepository profileRepository;

    @Autowired
    public ProfileServiceImpl(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Override
    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    @Override
    public Profile getProfileById(Long id) {
        return profileRepository.findById(id).orElse(null);
    }

    @Override
    public Profile createProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    @Override
    public Profile updateProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    @Override
    public void deleteProfile(Long id) {
        profileRepository.deleteById(id);
    }
    @Override
    public List<Profile> getProfilesByClientId(Long clientId) {
        return profileRepository.findByClientId(clientId);
    }
}
