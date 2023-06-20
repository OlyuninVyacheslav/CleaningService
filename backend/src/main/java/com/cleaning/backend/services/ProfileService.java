package com.cleaning.backend.services;

import com.cleaning.backend.entites.Profile;

import java.util.List;

public interface ProfileService {
    List<Profile> getAllProfiles();
    Profile getProfileById(Long id);
    Profile createProfile(Profile profile);
    Profile updateProfile(Profile profile);
    void deleteProfile(Long id);
    List<Profile> getProfilesByClientId(Long clientId);
}
