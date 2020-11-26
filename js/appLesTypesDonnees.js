/**
 * les différents types de données dans JS
 * en fct du type, vous ne pourrez pas effectuer certaines choses
 */

/** string --> chaine de caracrtères
 * entouré de guillemets = chaine de caractères
 * toute donnée que vous récupérez de votre fichier HTML avec JS est une chaine de caractères
 * en cas de " ou ' dans une chaine de caractères utilisé : \ pour éviter l'erreur, par ex : ' aujourd\'hui '
 */
let stringTest = "Ma chaine de caracteres est TOUJOURS entourée de guillemets";
console.log(stringTest);


/** number --> nombre entier, decimal, positif, négatif */

let numberTest = 24; /** ceci est un nombre */
let numberTest2 = "24"; /** ceci est une chaine de caractères */
console.log(typeof numberTest, typeof numberTest2); /** typeof donne le type de donnée stockée */


/** boolean --> vrai / faux : utilisé dans les conditions et les boucles */
let testBoolean = true; /** vrai */
let testBoolean2 = false /** faux */

/** null --> ne contient rien */
let testNull = null; /** uniquement null, POINT. */

/** undefined --> Etat d'une variable non initialisée
 * ou que la variable n'existe pas
 * ou que l'élément HTML que vous tentez de récupérer n'existe pas
 * */

let testUndefined = undefined;
let testUndefined2 = undefined;
