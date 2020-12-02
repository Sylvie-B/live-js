/**
 * opérateur de bases
 */

 // additions
let result = 5 + 5; // result contiendra 10.
result = result + 6; // on utilise result pour un calcul : 10 + 6
// la nouvelle valeur 16 est calculée puis écrase la valeur de result
// maintenant result contient 16.
result = result + 4; // 16 + 4 affecté à result (20)
result = result + 2; // 20 + 2 affecté à result (22)

// avec 2 variables
let a = "10";
let b = "1";
console.log(a + b); // a et b sont des chaines de caractères donc a + b = 101 (10 et 1)
console.log(parseInt(a) + parseInt(b)); // a et b sont converti en entier donc a + b = 11

let x = 10;
let y = 1;
let resXY = x + y;
console.log("le résultat de X + Y est : " + resXY);

// soustractions
let sousT = 5 -4; /** = 1 */
sousT = sousT - 1; /** = 0 */
sousT = sousT - 2; /** = -2 */


// multiplications

// divisions
let z = 2;
let div = 5 / (z + x);
console.log(div);

// exponentielle
let expo2 = 5**2; /** = 5*5 */
let expo3 = 5**3; /** = 5*5*5 */

// modulo


let nbr1 = 6;
let nbr2 = 7;
let multi = 3;

/** pour nombre 1 */
if ( (nbr1 % multi) === 0 ) {
    console.log( nbr1 + "est multiple de " + multi);
}
else {
    console.log(nbr1 + "n'est pas multiple de " + multi);
}

/** pour nombre 2 */
if (( nbr2 % multi) === 0 ) {
    console.log( nbr2 + "est multiple de " + multi);
}
else {
    console.log(nbr2 + "n'est pas multiple de " + multi + "car après division il reste" + (nbr2 % multi));
}

/** les operateurs d'affectation
 * voir ça comme des raccourcis
 */

// addition et affectation
let driveMyCar = 10;
let itBe = 1;
// itBe = itBe + driveMyCar; // itBe vaut 11
itBe += driveMyCar; // genre de raccourci, fait exactement le même que le code en commentaire de la ligne précédente

console.log(itBe)

// soustraction et affectation
let comeTogether = 10;
let heyJude = 0;
// heyJude = heyJude - comeTogether; // heyJude vaut -10
heyJude -= comeTogether;

// multiplication et affectation
let allMyLoving = 20;
let askMeWhy = 1;
askMeWhy = askMeWhy * allMyLoving;
askMeWhy *= allMyLoving;

// division et affectation
let imagine = 5;
let anyTimeAtAll = 2;
// anyTimeAtAll = anyTimeAtAll / imagine;
anyTimeAtAll /= imagine

// modulo et affectation
let chains = 60;
let dontLetMeDown = 3;
dontLetMeDown = dontLetMeDown % chains;
dontLetMeDown %= chains;

/** la concatenation
 * = coller deux chaines de caracrteres
 */

 let ch1 = "Hello ";
 let ch2 = "world";
 let ch3 = " how are you ?"

let concat = "decembre " + ch1 + ch2 + ch3;
 let concat2 = `december: ${ch1} ${ch2} ${ch3}`;
 console.log(concat);
 console.log(concat2);