# BearSpace - Video Call Application 🐻💻

BearSpace est une application web simple et élégante pour organiser des réunions vidéo, gérer des utilisateurs connectés et effectuer des opérations de base comme l'inscription et la connexion.

---

## Fonctionnalités principales 🌟

- **Inscription et connexion des utilisateurs** :
  - Créez un compte à l'aide de la page **Register**.
  - Connectez-vous via la page **Login**.
- **Réunions en ligne** :
  - Créez ou rejoignez une réunion à l'aide de l'interface principale.
- **Liste des utilisateurs connectés** :
  - Visualisez les utilisateurs connectés en temps réel avec leur statut (en ligne/hors ligne).
- **Interface utilisateur stylée** :
  - Animation dynamique et design moderne pour une expérience utilisateur agréable.

---

## Installation ⚙️

### Prérequis
- **Java** 17+
- **Maven** 3.8+
- **Navigateur moderne** (Google Chrome, Firefox, Edge)

### Étapes
1. Clonez le projet :
   ```bash
   git clone https://github.com/TedHub2003/VideoCall.git
   cd bearspace
   ```

2. Compilez et démarrez l'application avec Maven :
   ```bash
   mvn spring-boot:run
   ```

3. Accédez à l'application via votre navigateur à l'adresse :
   ```
   http://localhost:8080/login.html
   ```

---

## Structure du projet 📂

```
VideoCallApp/
├── src/
│   ├── main/
│   │   ├── java/org/example/videocallapp/
│   │   │   ├── user/
│   │   │   │   ├── User.java               # Modèle utilisateur
│   │   │   │   ├── UserController.java     # Contrôleur API pour les utilisateurs
│   │   │   │   ├── UserService.java        # Gestion des utilisateurs
│   │   │   ├── VideoCallAppApplication.java # Application principale
│   │   ├── resources/
│   │   │   ├── static/
│   │   │   │   ├── css/                   # Styles CSS
│   │   │   │   │   ├── Style.css
│   │   │   │   │   ├── StyleLogin.css
│   │   │   │   │   ├── StyleRegis.css
│   │   │   │   │   ├── index.css
│   │   │   │   ├── js/                    # Scripts JS
│   │   │   │   │   ├── index.js
│   │   │   │   │   ├── login.js
│   │   │   │   │   ├── register.js
│   │   │   │   ├── login.html             # Page de connexion
│   │   │   │   ├── register.html          # Page d'inscription
│   │   │   │   ├── index.html             # Page principale
│   │   │   │   ├── VideoApp.html          # Page de réunion
│   │   │   ├── application.properties
```

---

## Pages principales 🔤️

1. **Login (login.html)** :
   - Connectez-vous avec votre email et mot de passe.
   - Page stylée et animée.

2. **Register (register.html)** :
   - Créez un nouveau compte avec un nom d'utilisateur, un email et un mot de passe.

3. **Page principale (index.html)** :
   - Créez ou rejoignez une réunion vidéo.
   - Consultez la liste des utilisateurs connectés avec leur statut en temps réel.

---

## Technologies utilisées 🛠️

- **Backend** :
  - Spring Boot (MVC, API REST)
  - Maven (Gestion des dépendances)
- **Frontend** :
  - HTML, CSS (StyleLogin.css, StyleRegis.css)
  - JavaScript (index.js, login.js, register.js)
  - Animation avec Anime.js
- **Base de données** :
  - Gestion en mémoire (liste statique)
- **Serveur d'application** :
  - Apache Tomcat intégré à Spring Boot
  - L'API de ZEGOCLOUD (Pour la gestion de conference)

---

## Auteur ✍️

- **Nom :** [TedHub2003]
- **Contact :** [teddybokou@gmail.com]
- **GitHub :** [TedHub2003]

---

## Améliorations futures 🔧

- Intégrer une base de données pour une persistance des utilisateurs.
- Ajouter une fonctionnalité de chat entre les participants.
- Étendre les fonctionnalités de la réunion avec le partage d'écran et le chat vocal.
- Créer des tests unitaires pour assurer une meilleure stabilité.

---

### Capture d'écran 🖼️
![Login](https://github.com/user-attachments/assets/7f24d53e-db1a-4a7d-8d19-d933af78ab43)
![Register](https://github.com/user-attachments/assets/0c199e3f-6d68-489d-a44f-0dbe12cbe3a8)
![image](https://github.com/user-attachments/assets/7628c4f4-3f21-4435-802e-739df4740e99)
![image](https://github.com/user-attachments/assets/6831a91f-9815-4aaa-82d6-dd80f0072172)
![image](https://github.com/user-attachments/assets/d6afd55f-4d0e-4cea-ac00-189b9f08bb8b)



---

## Licence 📄

Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier.

---

### Démarrage rapide 🚀

1. Clonez le projet.
2. Démarrez l'application avec Maven.
3. Accédez à `http://localhost:8080`.
