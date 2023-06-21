package com.cleaning.backend.entites;

public class AppRequest {
    private App app;
    private Long type_id;
    private Long basis_id;

    private Long status_id;

    public Long getStatus_id() {
        return status_id;
    }

    public void setStatus_id(Long status_id) {
        this.status_id = status_id;
    }

    public App getApp() {
        return app;
    }

    public void setApp(App app) {
        this.app = app;
    }

    public Long getType_id() {
        return type_id;
    }

    public void setType_id(Long type_id) {
        this.type_id = type_id;
    }

    public Long getBasis_id() {
        return basis_id;
    }

    public void setBasis_id(Long basis_id) {
        this.basis_id = basis_id;
    }
}