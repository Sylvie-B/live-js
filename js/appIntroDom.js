/**
 *recuperer un element sur base de son id html
 */

/* recuperation par getElementById() */
// on récupere <p id="p1">paragraphe 1<p>
let paragraphe1 = document.getElementById("p01"); // pas besoin de mettre le #, c'est même interdit !

/*** manipulation du contenu ***/
paragraphe1.innerHTML = "changer le texte";
// on ajoute du texte / du html à la suite
paragraphe1.innerHTML += "mon texte ajouté, avec par ex une balise <span> en plus</span>";

/*** manipulation du style ***/
// on peut changer le style CSS d'un élément
paragraphe1.style.backgroundColor = "darkgrey";
paragraphe1.style.fontWeight = "bold"; // tout sous forme de chaine de caracteres, doubles ou simples guillemets
// astuce pour les tailles
paragraphe1.style.fontSize = "8px";
paragraphe1.style.fontSize = (8*2) + "px";

// si je veux 2 fois la taille de texte actuelle
paragraphe1.style.fontSize = (parseInt(paragraphe1.style.fontSize) * 2) + "px";
// important : on peut utiliser une propriété tout comme on utiliserai une variable

/*** recup du paragraphe 2 ***/
/* si on a pas encore entrée de valeur avec style.quelqueChose */
let paragraphe2 = document.getElementById("p02");


/**
 * Récupérer plusieurs éléments
 */

