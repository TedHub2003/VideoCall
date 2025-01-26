// Fonction pour charger et afficher les utilisateurs connectés
function loadAndDisplayUsers() {
    // Récupérer l'utilisateur connecté à partir du stockage local
    const connectedUser = localStorage.getItem('connectedUser');
    if (!connectedUser) { // Si aucun utilisateur connecté n'est trouvé
        window.location.href = "login.html"; // Rediriger vers la page de connexion
        return;
    }

    const userListElement = document.getElementById("userList");
    // Afficher un message de chargement temporaire
    userListElement.innerHTML = "Loading...";

    // Récupérer la liste des utilisateurs via une requête API
    fetch('/api/users/all')
        .then((response) => {
            if (!response.ok) { // Vérifier si la réponse de l'API est correcte
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Convertir la réponse en JSON
        })
        .then((data) => {
            console.log(data); // Afficher les données dans la console (pour débogage)
            displayUsers(data, userListElement); // Appeler une fonction pour afficher les utilisateurs
        })
        .catch((error) => {
            console.error('Error fetching users:', error); // Afficher l'erreur dans la console
            userListElement.innerHTML = "Failed to load users."; // Afficher un message d'erreur
        });
}

// Fonction pour afficher les utilisateurs dans une liste HTML
function displayUsers(userList, userListElement) {
    userListElement.innerHTML = ""; // Réinitialiser le contenu de la liste

    // Parcourir la liste des utilisateurs et créer des éléments HTML pour chaque utilisateur
    userList.forEach(user => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
                <div>
                    <i class="fa fa-user-circle"></i>
                    ${user.username} <i class="user-email">(${user.email})</i>
                </div>
                <i class="fa fa-lightbulb-o ${user.status === "online" ? "online" : "offline"}"></i>
            `;
        userListElement.appendChild(listItem); // Ajouter l'élément à la liste HTML
    });
}

// Appeler la fonction `loadAndDisplayUsers` au chargement de la page
window.addEventListener("load", loadAndDisplayUsers);

// Fonction pour gérer la déconnexion de l'utilisateur
function handleLogout() {
    const connectedUser = localStorage.getItem('connectedUser');
    console.log("Connected user during logout:", connectedUser);

    // Envoyer une requête pour déconnecter l'utilisateur via l'API
    fetch('/api/users/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: connectedUser, // Envoyer les informations de l'utilisateur connecté
    })
        .then((response) => {
            if (!response.ok) { // Vérifier si la réponse de l'API est correcte
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Convertir la réponse en JSON
        })
        .then(() => {
            console.log("Logout successful"); // Confirmation de la déconnexion
            localStorage.removeItem('connectedUser'); // Supprimer les informations utilisateur du stockage local
            window.location.href = "login.html"; // Rediriger vers la page de connexion
        })
        .catch((error) => {
            console.error("Error during logout:", error); // Afficher une erreur si la déconnexion échoue
        });
}

// Attacher un gestionnaire d'événements pour le bouton de déconnexion
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", handleLogout);

// Fonction pour créer une nouvelle réunion
function handleNewMeeting() {
    const connectedUser = JSON.parse(localStorage.getItem('connectedUser')); // Récupérer l'utilisateur connecté
    window.open(`videoApp.html?username=${connectedUser.username}`, "_blank"); // Ouvrir une nouvelle fenêtre pour la réunion
}

// Attacher le gestionnaire d'événements au bouton "Créer une réunion"
const newMeetingBtn = document.getElementById("newMeetingBtn");
newMeetingBtn.addEventListener("click", handleNewMeeting);

// Fonction pour rejoindre une réunion existante
function handleJoinMeeting() {
    const roomId = document.getElementById("meetingName").value; // Récupérer l'ID de la réunion depuis l'entrée utilisateur
    const connectedUser = JSON.parse(localStorage.getItem('connectedUser')); // Récupérer l'utilisateur connecté

    const url = `videoApp.html?roomID=${roomId}&username=${connectedUser.username}`; // Construire l'URL pour rejoindre la réunion
    window.open(url, "_blank"); // Ouvrir une nouvelle fenêtre pour rejoindre la réunion
}
