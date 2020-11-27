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

// égalité === avec diff type de valeur
// avec des nombres entiers
let result11 = 1 === 1; // on compare la valeur ET le type, le résultat sera TRUE
let result12 = 1 === 0; // on compare la valeur ET le type, le résultat sera FALSE
let result13 = -35 === 52; // on compare la valeur ET le type, le résultat sera FALSE
let result14 = "-35" === -35; // on compare la valeur ET le type, le résultat sera FALSE
let result15 = "-35" === "-35"; // TRUE
let result16 ="mon texte" === "mon texte 2"; // FALSE
let result17 = "mon texte pour tester" === "mon texte pour tester"; // TRUE

console.log("result11 vaut : " + result11 + " ==> 1 === 1");
console.log("result12 vaut : " + result12 + " ==> 1 === 0");
console.log("result13 vaut : " + result13 + " ==> -35 === 52");
console.log("result 14 vaut : " + result14 + " ==> \"-35\" === -35");
console.log("result 15 vaut : " + result15 + " ==> \"-35\" === \"-35\"");

// === teste l'inégalité entre 2 valeurs ET prend en compte le type de donnée

console.log("demonstration avec !== ie différent");
let result18 = 1 !== 1; // on compare la valeur ET le type, le résultat sera FALSE
let result19 = 1 !== 0; // on compare la valeur ET le type, le résultat sera TRUE : le type est le même mais pas la valeur
let result20 = -35 !== 52; // on compare la valeur ET le type, le résultat sera TRUE : le type est le même mais pas la valeur
let result21 = "-35" !== -35; // on compare la valeur ET le type, le résultat sera TRUE : type différent et valeur égale
let result22 = "-35" !== "-35"; // FALSE : type et valeur identiques
let result23 ="mon texte" !== "mon texte 2"; // TRUE
let result24 = "mon texte pour tester" !== "mon texte pour tester"; // FALSE

console.log("result 18 vaut : " + result18 + " ==> 1 !== 1");
console.log("result 19 vaut : " + result19 + " ==> 1 !== 0");
console.log("result 20 vaut : " + result20 + " ==> -35 !== 52");
console.log("result 21 vaut : " + result21 + " ==> \"-35\" !== -35");
console.log("result 22 vaut : " + result22 + " ==> \"-35\" !== \"-35\"");
console.log("result 23 vaut : " + result23 + " ==> 1 !== 1");
console.log("result 24 vaut : " + result24 + " ==> !== 0");

/** teste que la valeur de gauche est plus grande que la valeur de droite */
/** on parle bien de valeur */
let chaineDemo = "Hello World";

console.log("OPERATEUR >");
let result25 = 5 > 6; // sans surprise, FALSE, 5 n'est pas plus grand que 6
let result26 = 6 > 5; // TRUE, 6 plus grand que 5
let result27 = 6 > 6; // FALSE, car valeurs identiques
let result28 = 6 > "hello"; // FALSE, nombre comparer à texte
// length contient la longueur de la chaine de caractere
let result29 = 6 > "hello".length; // TRUE
let result30 = 6 > chaineDemo.length; // TRUE

console.log("6 est-il plus grand que Hello : " + result28);
console.log("6 est-il plus grand que la taille de la chaine de caractères Hello : " + result29);
console.log("6 est-il plus grand que la taille de la chaine de caractères contenue dans chaineDemo : " + result30);


/** teste que la valeur de gauche est plus petite que la valeur de droite */
/** on parle bien de valeur */
console.log("OPERATEUR <"); //
let result31 = 5 < 6; // TRUE
let result32 = "HELLO WORLD".length < 10; // hello world < 10 ==> FALSE


/** teste que la valeur de gauche est plus grande ou égale à la valeur de droite */
/** on parle bien de valeur */
console.log("OPERATEUR >=");
let result33 = 6 >= 6; // TRUE

/** teste que la valeur de gauche est plus petite ou égale à la valeur de droite */
/** on parle bien de valeur */
console.log("OPERATEUR <=");
let result34 = "on verra plus tard".length <= 20; //  TRUE result34=18
console.log(result34)