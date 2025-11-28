Nom Du Projet: Jeu De Pendu

Desccription:
Il s’agit d’un jeu du pendu interactif réalisé en HTML, CSS et JavaScript.
Le joueur doit deviner un mot en sélectionnant des lettres via un clavier virtuel.
Chaque erreur dessine progressivement le pendu grâce à un canvas.
Le jeu inclut un nombre d'erreur limité, un système de score, un meilleur score sauvegardé et des animations.

Technologies utilisées:
-HTML: structure de la page
-CSS: mise en forme, animation, responsive
-JavaScript: logique du jeu
-Canvas HTML: dessin du pendu étape par étape
-LocalStorage: sauvegarde du meilleur score
-(Optionnel) JSON: chargement externalisé des mots

Fonctionnalités principales:
-Sélection aléatoire d’un mot à deviner
-Clavier virtuel interactif
-Affichage dynamique des lettres et des "_ "
-Compteur d’erreurs (limité à 7)
-Dessin du pendu à l'aide de canvas
-Score et meilleur score sauvegardés
-Bouton “Nouvelle partie”
-Fallback : si le fetch JSON échoue, utilisation d’une liste interne de mots
-Interface avec animations et design moderne

Lien vers la page GitHub Pages:
https://salsabilkortas.github.io/Kortas_Salsabil_JeuDePendu/

Nouveautés explorées:
-L’utilisation du canvas pour dessiner des éléments graphiques
-La gestion du localStorage pour sauvegarder des scores
-La création d’un clavier virtuel dynamique en JavaScript
-L’organisation d’un projet en plusieurs commits cohérents
-La structure d’un code plus propre et lisible

Difficultés rencontrées:
-Charger un fichier JSON local (problème de fetch en contexte non serveur)
-Implémenter une logique claire et correcte pour le jeu (création d'un clavier virtuel, comparer les lettres essayées par celles du mot actuel...)
-Dessiner sur un canvas
-Trouver une structure de commits logique et progressive

Solutions apportées:
-Tests fréquents et utilisation de la console navigateur pour détecter des erreurs
-Ajout d’un tableau de mots interne utilisé en cas d’échec de fetch
-Séparation du code en fonctions claires: newGame(), displayWord(), createKeyboard(), handleGuess(), drawHangman(), gameOver()
-Recherche sur internet pour trouver des solutions cohérentes pour chaque problème
