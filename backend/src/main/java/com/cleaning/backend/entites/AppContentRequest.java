package com.cleaning.backend.entites;

public class AppContentRequest {
    private AppContent appContent;
    private Long app_id;
    private Long service_id;

    public AppContent getAppContent() {
        return appContent;
    }

    public void setAppContent(AppContent appContent) {
        this.appContent = appContent;
    }

    public Long getApp_id() {
        return app_id;
    }

    public void setApp_id(Long app_id) {
        this.app_id = app_id;
    }

    public Long getService_id() {
        return service_id;
    }

    public void setService_id(Long service_id) {
        this.service_id = service_id;
    }
}
