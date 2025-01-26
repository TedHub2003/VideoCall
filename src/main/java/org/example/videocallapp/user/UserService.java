package org.example.videocallapp.user;


import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.IntStream;

@Service
public class UserService {
    private static final List<User> USER_LIST = new ArrayList<>();

    // Cette méthode enregistre un utilisateur et l'ajoute à la liste des utilisateurs
    public void register(User user) {
        user.setStatus("online");
        USER_LIST.add(user);
        System.out.println("Utilisateur enregistré : " + user);
    }

    public User login(User user) {
        System.out.println("Données reçues pour connexion : " + user);
        var userIndex = IntStream.range(0, USER_LIST.size())
                .filter(i -> USER_LIST.get(i).getEmail().equals(user.getEmail()))
                .findAny()
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        var cUser = USER_LIST.get(userIndex);
        if (!cUser.getPassword().equals(user.getPassword())) {
            throw new RuntimeException("Mot de passe incorrect");
        }
        cUser.setStatus("online");
        return cUser;
    }


    public void logout(String email) {
        var userIndex = IntStream.range(0, USER_LIST.size())
                .filter(i -> USER_LIST.get(i).getEmail().equals(email))
                .findAny()
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));
        USER_LIST.get(userIndex).setStatus("offline");
    }

    public List<User> findAll() {
        return USER_LIST;
    }
}
