// avec les opérateurs de comparaisons, ce qui sera retourné est tjs un boolèen --> true or false
// qui dit retour dit variable ou structure de controle (if, while, etc...)



/** == teste égalité entre 2 valeurs, == n'est pas recommandé */
console.log("OPERATEUR ==");
let result1 = true == true; // retourne true car vrai = vrai
let result2 = true == false;    // retourne false car vrai différent de faux
let result3 = false == false;   // retourne true car faux = faux
let result4 = true == 1;
let result5 = true == 2;
let result6 = true == "1";
let result7 = true == "true";
let result8 = false == 0;
let result9 = false == "0";
let result10 = false == "false";

console.log("result 1 vaut : " + result1 + "==> true == true");
console.log("result 2 vaut : " + result2 + "==> true == false");
console.log("result 3 vaut :" + result3 + "==> false == false");
console.log("result 4 vaut :" + result4 + "==> true == 1");
console.log("result 5 vaut : " + result5 + "==> true == 2");
console.log("result 6 vaut : " + result6 + "==> true == \"1\"");
console.log("result 7 vaut : " + result7 + "==> true == \"true\"");
console.log("result 8 vaut : " + result8 + "==> false == 0");
console.log("result 9 vaut : " + result9 + "==> false == \"0\"");
console.log("result 10 vaut : " + result10 + "==> false == \"false\"");

// === teste égalité entre 2 valeurs ET prend en compte le type de donnée

console.log("demonstration avec ===");
result1 = true === true; // retourne true car vrai = vrai
result2 = true === false;    // retourne false car vrai différent de faux
result3 = false === false;   // retourne true car faux = faux
result4 = true === 1;
result5 = true === 2;
result6 = true === "1";
result7 = true === "true";
result8 = false === 0;
result9 = false === "0";
result10 = false === "false";

console.log("OPERATEUR ===");

// tests avec valeur boolèennes
console.log("demonstration avec ===");
console.log("result 1 vaut : " + result1 + "==> true === true");
console.log("result 2 vaut : " + result2 + "==> true === false");
console.log("result 3 vaut :" + result3 + "==> false === false");
console.log("result 4 vaut :" + result4 + "==> true === 1");
console.log("result 5 vaut : " + result5 + "==> true === 2");
console.log("result 6 vaut : " + result6 + "==> true === \"1\"");
console.log("result 7 vaut : " + result7 + "==> true === \"true\"");
console.log("result 8 vaut : " + result8 + "==> false === 0");
console.log("result 9 vaut : " + result9 + "==> false === \"0\"");
console.log("result 10 vaut : " + result10 + "==> false === \"false\"");

// égalité === avec diff valeur
let result11 = 1 === 1; // on compare la valeur ET le type, le résultat sera TRUE
let result12 = 1 === 0; // on compare la valeur ET le type, le résultat sera FALSE
let result13 = -35 === 52; // on compare la valeur ET le type, le résultat sera FALSE
let result14 = "-35" === -35; // on compare la valeur ET le type, le résultat sera FALSE

console.log("result11 vaut " + result11 + " ==> 1 === 1");
console.log("result12 vaut " + result12 + " ==> 1 === 0");
console.log("result13 vaut " + result13 + " ==> -35 === 52");

