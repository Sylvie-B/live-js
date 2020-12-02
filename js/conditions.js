// une condition sert à executer un code lorsqu'un test est true
// si le test est false alors le bout de code est ignoré

let age = 17;

// le code sera executé si la variable age est plus petite que 10
if(age < 18) {
    // vous ètes libre d'ajouer autant de code que vous le souhaitez ici
    console.log("vous êtes mineur"); // si age < que 18 alors mineur
}

// si c'est faut
else{
    console.log("ce n'est pas le cas vous étes majeur"); // si age > que 18 alors majeur
}

// si on a besoin de tester une seule valeur on peut se passer du else
let day = prompt("Entrez un numéro de jour");
day = parseInt(day); // parseInt transforme une chaine de caracrtere en nombre quand c'est possible
let message = "Hello, nous sommes ";

if(day === 24){
    day = " soir de noël"
}

console.log(message + "le " + day);

// technique pour être sûr
console.log(parseInt("35"));
console.log(parseInt("test")); // vous obtiendrez NaN --> Not a Nomber
// quand vous faites un prompt, vous n'êtes jamais sûr que l'utilisation va entrer un nombre
// Never Trust What User Input ! NTWUI !
let dataNomber = prompt("Donnez moi un nombre");
dataNomber = parseInt(dataNomber);
if(isNaN(dataNomber)) { // la fonction isNaN() vérifie si une variable est différente d'un nombre
    console.log("wesh gros, t'as essayé de m'entuber ! ca c'est pas un nombre");
    dataNomber = 0; // si c'est pas un nombre, alors on peut décider que la valeur est égale à 0
}

// on sait que dataNomber contient un nombre et pas autre chose
console.log("la valeur de dataNumber est :" + dataNomber);

// on veut faire quelque chose si les nbres sont 2, 3, 4, 5 ou 6, autre chose si ce n'est pas le cas.
if(dataNomber === 2) {
    console.log("dataNumber vaut actuellement 2");
}

else if(dataNomber === 3) {
    console.log("dataNumber vaut actuellement 3");
}

else if(dataNomber === 4) {
    console.log("dataNumber vaut actuellement 4");
}

else if(dataNomber === 5) {
    console.log("dataNumber vaut actuellement 5");
}

else if(dataNomber === 6) {
    console.log("dataNumber vaut actuellement 6");
}

else {
    console.log("dataNumber vaut actuellement autre chose que 2, 3, 4, 5 ou 6");
}

// on peut faire la même chose de maniere plus propre avec un switch
// switch permet de tester différentes valeurs pour une variable donnée
// notre variable dataNumber vaut soit 2, 3, 4, 5 ou 6 OU autre chose
switch (dataNomber) {
    case 2:
        console.log("dataNumber vaut actuellement 2");
        break;
    case 3:
        console.log("dataNumber vaut actuellement 3");
        break;
    case 4:
        console.log("dataNumber vaut actuellement 4");
        break;
    case 5:
        console.log("dataNumber vaut actuellement 5");
        break;
    case 6:
        console.log("dataNumber vaut actuellement 6");
        break;
    default:
        console.log("dataNumber vaut actuellement autre chose que 2, 3, 4, 5 ou 6");
}

// les operateurs logiques
// && --> AND
// || --> OR
// ! --> NOT

// quasiment tjs utilisé dans des conditons
let a = 4;
let b = 7;
// jusqu'à présent on tester une seule variable, avec les op logiques, plusieurs
// testons que A < 5 et que b >6
if(a < 5 && b > 6) {
    console.log("A est plus petit que 5 et b est plus grand que 6");
    console.log("Si b avait été plus petit que 6, alors on aurait pas pu entrer ici en discothèque");
}
