/**
 *recuperer un element sur base de son id html
 */

/* recuperation par getElementById() */
// on récupere <p id="p1">paragraphe 1<p>
let paragraphe1 = document.getElementById("p01"); // pas besoin de mettre le #, c'est même interdit !

/*** manipulation du contenu ***/
paragraphe1.innerHTML = "changer le texte, ";
// on ajoute du texte / du html à la suite
paragraphe1.innerHTML += "mon texte ajouté, avec par ex une balise <span> en plus</span>";

/*** manipulation du style ***/
// on peut changer le style CSS d'un élément
paragraphe1.style.backgroundColor = "darkgrey";
paragraphe1.style.fontWeight = "bold"; // tout sous forme de chaine de caracteres, doubles ou simples guillemets
// astuce pour les tailles
paragraphe1.style.fontSize = "16px";
paragraphe1.style.fontSize = (16*2) + "px";

// si je veux 2 fois la taille de texte actuelle
paragraphe1.style.fontSize = (parseInt(paragraphe1.style.fontSize) * 2) + "px";
// important : on peut utiliser une propriété tout comme on utiliserai une variable

/*** recup du paragraphe 2 ***/
// jusqu'à présent on créait des valeurs qui venait s'ajouter dans l'attribut style, c'est valable si la régle + valeur n'existe pas coté css
/* si on a pas encore entrée de valeur avec style.quelqueChose */
let paragraphe2 = document.getElementById("p02");
paragraphe2.innerHTML = "J'écris dans le paragraphe 2";
paragraphe2.style.border = "1px solid black";

// ici je récup le PREMIER élément qui dispose de la classeTest, TOUJOURS un seul élément
let paragraphe3 = document.querySelector(".classTest"); // utiliser les sélecteurs css
paragraphe3.style.fontSize = "100px";
paragraphe3.style.left = "100px"; // dans certain cas ça ne fonctionnera pas
// solutions
let cssstyle = window.getComputedStyle(paragraphe3);
let left = cssstyle.getPropertyValue("left"); // ici on recup une valeur calculée par le navigateur
console.log(cssstyle);
console.log(left);
cssstyle.setProperty("left", "4000px"); // on remplace la valeur calculée par le navigateur par notre propre valeur
console.log(cssstyle.getPropertyValue("left")); // on doit à nouveau récupérer la valeur recalculée

/**
 * Récupérer plusieurs éléments
 */

