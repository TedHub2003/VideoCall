// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w|!|👋)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
    .add({
        targets: '.ml11 .line',
        scaleY: [0, 1],
        opacity: [0.5, 1],
        easing: "easeOutExpo",
        duration: 700
    })
    .add({
        targets: '.ml11 .line',
        translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
        easing: "easeOutExpo",
        duration: 700,
        delay: 100
    })
    .add({
        targets: '.ml11 .letter',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=775',
        delay: (el, i) => 34 * (i + 1)
    })
    .add({
        targets: '.ml11',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });






// Fonction pour gérer la connexion d'un utilisateur
function handleLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission du formulaire

    // Récupérer les valeurs des champs email et mot de passe
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Créer un objet utilisateur contenant les données du formulaire
    const user = {
        email: email,
        password: password
    }

    // Afficher les données dans la console pour débogage
    console.log("Données envoyées :", user);

    // Envoyer une requête POST pour authentifier l'utilisateur via l'API
    fetch('/api/users/login', {
        method: 'POST', // Méthode HTTP pour envoyer des données
        headers: {
            'Content-Type': 'application/json' // Indiquer que les données envoyées sont en JSON
        },
        body: JSON.stringify(user) // Convertir l'objet utilisateur en chaîne JSON
    })
        .then(response => {
            if (!response.ok) { // Vérifier si la réponse de l'API est incorrecte
                alert('Invalid username or password'); // Afficher une alerte si les informations sont invalides
            }
            return response.json(); // Convertir la réponse en JSON
        })
        .then((response) => {
            // Enregistrer l'utilisateur connecté dans le stockage local
            localStorage.setItem('connectedUser', JSON.stringify(response));

            // Rediriger l'utilisateur vers la page principale après connexion
            window.location.href = 'index.html';
        })
        .catch((error) => {
            // Gérer les erreurs si la requête échoue
            console.error('Post request Error:', error);
        });
}

// Attacher un gestionnaire d'événements pour le formulaire de connexion
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', handleLogin); // Appeler `handleLogin` lors de la soumission du formulaire
