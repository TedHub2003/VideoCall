package org.example.videocallapp.user;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.IntStream;

import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")//pour autoriser les requêtes provenant de n'importe quelle origine
@Slf4j
public class UserController  {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    //cette méthode permet d'ajouter un utilisateur à la liste des utilisateurs
    //lorsqu'un utilisateur se connecte
    @PostMapping("/register")
    public void  register(@RequestBody User user) {
        userService.register(user);
    }

    @PostMapping("/login")
    public User login(@RequestBody  User user) {
        System.out.println("Données reçues depuis le frontend : " + user);
        return userService.login(user);
    }
    @PostMapping("/logout")
    public void logout(@RequestBody Map<String, String> payload) {
        String email = payload.get("email");
        System.out.println("Email reçu pour logout : " + email);
        userService.logout(email);
    }
    @GetMapping("/all")
    public List<User> findAll() {
        return userService.findAll();
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String>handler(Exception ex){
        ex.printStackTrace();
        return ResponseEntity
                .status(INTERNAL_SERVER_ERROR)
                .body(ex.getMessage());
    }
}
