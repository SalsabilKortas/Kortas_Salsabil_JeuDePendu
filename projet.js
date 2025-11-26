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

//initialisation des variables
let selectedWord = ""; //mot à deviner
let guessed = []; //tableau qui contient less lettres devinées correctement
let errors = 0; //nombre d'erreur(s)

/*charger les mots du fichier json
fetch("words.json")
    .then(res => res.json())
    .then(data => {
        WORDS = data.map(w => w.toUpperCase()); 
        newGame();
    })
    .catch(err => console.error("erreur chargement json :", err));
let WORDS = []; //tableau qui contient les mots du fichier json*/

//nouvelle partie
function newGame() {
    if (WORDS.length === 0) return;

    selectedWord = WORDS[Math.floor(Math.random() * WORDS.length)]; //choix aleatoire du mot à deviner
    guessed = [];
    errors = 0;
    errorDisplay.textContent = errors;

    createKeyboard();
    displayWord();
}

restartBtn.onclick = newGame;

function displayWord() {
    wordContainer.innerHTML = selectedWord
        .split("") //transformer le mot à deviner en tableau de lettres
        .map(letter => guessed.includes(letter) ? letter : "_") //afficher la lettre si elle est bien devinée sinon afficher "_"
        .join(" ");

    //si la partie est gagnée (le mot est bien deviné)
    if (!wordContainer.innerHTML.includes("_")) {
        wordContainer.classList.add("win");
        setTimeout(newGame, 1500);
    }
}

//clavier virtuel pour distinguer les lettres fausses
function createKeyboard() {
    keyboard.innerHTML = "";
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    letters.forEach(letter => {
        const key = document.createElement("div");
        key.classList.add("key");
        key.textContent = letter;

        key.onclick = () => handleGuess(letter, key);
        keyboard.appendChild(key);
    });
}

function handleGuess(letter, keyElement) {
    keyElement.classList.add("disabled"); //desactiver la touche apres usage

    if (selectedWord.includes(letter)) { // si la lettre est correcte
        guessed.push(letter); //ajouter la lettre au tableau des lettres devinées 
    } else {
        errors++;
        errorDisplay.textContent = errors;
        if (errors >= 7) return gameOver(); // arreter la partie si le nombre d'erreur dépasse la limite
    }

    displayWord();
}

//partie perdue
function gameOver() {
    keyboard.querySelectorAll(".key").forEach(k => k.classList.add("disabled")); //desactiver toutess les touches
    wordContainer.innerHTML = selectedWord; //afficher le mot à deviner
    wordContainer.classList.remove("win");

    setTimeout(newGame, 2000);
}

