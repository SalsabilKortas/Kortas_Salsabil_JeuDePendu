// tableau qui contient les mots à deviner au cas d'erreur de fetch (serveur non local)
const WORDS = [
    "JUMP", "QUIZ", "VEX", "SWORD", "PIXEL", "QUICK", "GLIMPSE",
    "BRIDGE", "GUITAR", "MARKER", "PLANET", "DOCTOR", "CASTLE", "JUNGLE",
    "UNICORN", "WYVERN", "SATELLITE", "TELESCOPE", "ADVENTURE", "MAGNETIC", "PYRAMID"
].map(w => w.toUpperCase());

const wordContainer = document.getElementById("word");
const keyboard = document.getElementById("keyboard");
const errorDisplay = document.getElementById("errors");
const scoreDisplay = document.getElementById("score");
const bestScoreDisplay = document.getElementById("bestScore");
const restartBtn = document.getElementById("restart");

//innitialisation des variables
let selectedWord = ""; //mot à deviner
let guessed = []; //tableau qui contient less lettres devinées correctement

/*charger les mots du fichier json
fetch("words.json")
    .then(res => res.json())
    .then(data => {
        WORDS = data.map(w => w.toUpperCase()); 
        newGame();
    })
    .catch(err => console.error("erreur chargement json :", err));
let WORDS = []; //tableau qui contient les mots du fichier json*/

function displayWord() {
    wordContainer.innerHTML = selectedWord
        .split("") //transformer le mot à deviner en tableau de lettres
        .map(letter => guessed.includes(letter) ? letter : "_") //afficher la lettre si elle est bien devinée sinon afficher "_"
        .join(" ");
}
