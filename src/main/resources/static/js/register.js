// Fonction pour gérer l'enregistrement d'un nouvel utilisateur
function handleRegistration(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Récupérer les valeurs saisies par l'utilisateur dans le formulaire
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const status = "online"; // Attribuer le statut "online" par défaut lors de l'inscription

    // Créer un objet contenant les informations de l'utilisateur
    const user = {
        username: username,
        email: email,
        password: password,
        status: status,
    };

    // Envoyer une requête POST pour enregistrer l'utilisateur via l'API
    fetch('/api/users/register', {
        method: 'POST', // Méthode HTTP pour envoyer les données
        headers: {
            'Content-Type': 'application/json' // Indiquer que les données envoyées sont au format JSON
        },
        body: JSON.stringify(user) // Convertir l'objet utilisateur en chaîne JSON
    })
        .then(response => {
            if (!response.ok) { // Vérifier si la réponse de l'API est incorrecte
                throw new Error('Network response was not ok'); // Lever une erreur en cas de problème
            }
            return response; // Retourner la réponse si elle est correcte
        })
        .then(() => {
            // Enregistrer les informations de l'utilisateur dans le stockage local
            localStorage.setItem("connectedUser", JSON.stringify(user));

            // Rediriger l'utilisateur vers la page principale après enregistrement
            window.location.href = "index.html";
        })
        .catch(error => {
            // Gérer les erreurs si la requête échoue
            console.error('POST request error:', error);
        });
}

// Attacher un gestionnaire d'événements au formulaire d'inscription
const registrationForm = document.getElementById("registrationForm");
registrationForm.addEventListener("submit", handleRegistration); // Appeler `handleRegistration` lors de la soumission
