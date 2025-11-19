// Selectionner des bouttons
const pierre = document.getElementById("pierre");
const papier = document.getElementById("papier");
const ciseaux = document.getElementById("ciseaux");

// Selectionner des "span"
const ordinateur = document.getElementById("ordinateur");
const joueur = document.getElementById("joueur");
const resultat = document.getElementById("resultat");

// Ajout des écouteurs d'événements aux bouttons pour permettre à l'utilisateur de faire un choix
pierre.addEventListener("click", () => {
    joueur.textContent = "Pierre";
    joueur.style.color = "green";
    joueur.style.fontWeight = "bold";

    // Appel de la fonction "choixOrdinateur" pour permettre à l'ordinateur de jouer
    choixOrdinateur();

    // Appel de la fonction "determinerGagnant" pour déterminer le gagnant
    determinerGagnant();

    // Appel de la fonction "ajouterScore" pour afficher les scores
    ajouterScore();
});
papier.addEventListener("click", () => {
    joueur.textContent = "Papier";
    joueur.style.color = "purple";
    joueur.style.fontWeight = "bold";

    // Appel de la fonction "choixOrdinateur" pour permettre à l'ordinateur de jouer
    choixOrdinateur();

    // Appel de la fonction "determinerGagnant" pour déterminer le gagnant
    determinerGagnant();

    // Appel de la fonction "ajouterScore" pour afficher les scores
    ajouterScore();
});
ciseaux.addEventListener("click", () => {
    joueur.textContent = "Ciseaux";
    joueur.style.color = "red";
    joueur.style.fontWeight = "bold";

    // Appel de la fonction "choixOrdinateur" pour permettre à l'ordinateur de jouer
    choixOrdinateur();

    // Appel de la fonction "determinerGagnant" pour déterminer le gagnant
    determinerGagnant();

    // Appel de la fonction "ajouterScore" pour afficher les scores
    ajouterScore();
});

// fonction pour permettre à l'ordinateur de faire un choix aléatoire
function choixOrdinateur(){
    const choixPossible = ["Pierre", "Papier", "Ciseaux"];
    const choix = choixPossible[Math.floor(Math.random() * choixPossible.length)];
    ordinateur.textContent = choix;
    if(ordinateur.textContent === "Pierre"){
        ordinateur.style.color = "green";
        ordinateur.style.fontWeight = "bold";
    } else if(ordinateur.textContent === "Papier"){
        ordinateur.style.color = "purple";
        ordinateur.style.fontWeight = "bold";
    } else{
        ordinateur.style.color = "red";
        ordinateur.style.fontWeight = "bold";
    }
}

// Fonction pour determiner le gagnant
const determinerGagnant = () => {
    if(joueur.textContent === ordinateur.textContent){
        resultat.textContent = "Egalité !";
        resultat.style.color = "purple";
    } else if(joueur.textContent === "Pierre" && ordinateur.textContent === "Ciseaux" || (joueur.textContent === "Papier" && ordinateur.textContent === "Pierre") || (joueur.textContent === "Ciseaux" && ordinateur.textContent === "Papier")){
        resultat.textContent = "Gagné !";
        resultat.style.color = "green";
    } else{
        resultat.textContent = "Perdu !";
        resultat.style.color = "red";
    }
}

// Fonction pour ajouter des scores
let resultatScoreJoueur = 0;
let resultatScoreOrdinateur = 0;

function ajouterScore(){
    const scoreJoueur = document.getElementById("scoreJoueur");
    scoreJoueur.textContent = resultatScoreJoueur;
    const scoreOrdinateur = document.getElementById("scoreOrdinateur");
    scoreOrdinateur.textContent = resultatScoreOrdinateur;

    if(resultat.textContent === "Gagné !"){
        resultatScoreJoueur++;
        scoreJoueur.textContent = resultatScoreJoueur;
    } else if(resultat.textContent = "Perdu !"){
        resultatScoreOrdinateur++;
        scoreOrdinateur.textContent = resultatScoreOrdinateur;
    } else{

    }
}