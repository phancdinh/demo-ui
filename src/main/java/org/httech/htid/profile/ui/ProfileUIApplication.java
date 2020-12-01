package org.httech.htid.profile.ui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
public class ProfileUIApplication {
	public static void main(String[] args) {
		SpringApplication.run(ProfileUIApplication.class, args);
	}
}
