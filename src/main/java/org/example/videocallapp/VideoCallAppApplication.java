package org.example.videocallapp;

import org.example.videocallapp.user.User;
import org.example.videocallapp.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class VideoCallAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(VideoCallAppApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(UserService userService) {
        return args -> {
            userService.register(User.builder()
                    .username("Teddy")
                    .email("Teddy@Bear.ca")
                    .password("1234")
                    .build());
            userService.register(User.builder()
                    .username("Pollar")
                    .email("Pollar@Bear.ca")
                    .password("2345")
                    .build());
            userService.register(User.builder()
                    .username("Micky")
                    .email("Micky@Bear.ca")
                    .password("2025")
                    .build());

        };
    }
}
