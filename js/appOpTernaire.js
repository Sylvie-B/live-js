// les op ternaires sont à utiliser avec parcimonie
let a = 1;
let message;

if(a === 1) {
    message = "a est égal à 1";
}
else {
    message = "a est différent de 1";
}

console.log(message);

// le ternaire n'est utile qu'avec une structure conditionnelle simple
// lorsqu'on a UNE opération à effectuer, PAS utile si PLUSIEURS opérations
message = (a === 1) ? "a est égal à 1" : "a est différent de 1"; // ici VRAI
console.log(message); /* ==> message contient a est égal à 1 */

a = 2;
message = (a === 1) ? "a est égal à 1" : "a est différent de 1"; // ici FAUX
console.log(message); /* ==> message contient a est différent de 1 */

