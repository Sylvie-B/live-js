/*
la boucle while
 */
let elements = document.getElementsByTagName("p"); // on recup tous les é paragraphe TOUS
console.log(elements); // on a plusieurs é
console.log("test de la taille de la collection : " + elements.length); // la propriété length contient le nbre d'é récupéré

// pour accéder à chaque é il faudra boucler sur la collection
let i = 0; // un passge = une itération

while(i < elements.length) { // ici, nous avons 8 é, la propriété length contient donc la valeur 8
    let paragraph = elements.item(i); // on recup à chaque fois un é d'index i
    // on aurait auusi pu récupérer l'é individuel de la maniere suivante :
    let demoCrochetsParagraph = elements[i];

    console.log("element : " + paragraph + " " + i);
    paragraph.innerHTML = "je suis le paragraphe d'index " + i;

    i++; // correspond à i = i + 1 OU i += 1
}

/*
la boucle do... while
 */
i = 0;
let spans = document.getElementsByTagName("span");
console.log("il y a un nombre de " + spans.length + " spans");

do {
    // même principe sauf qu'on passe au moins une fois dans la boucle
    console.log("Je suis passé ds la boucle, i vaut : " + i);
    i++;
}
while (i < spans.length);


/*
la boucle for
 */
let elementsFor = document.getElementsByClassName("maClass");
for(let ref = 0; ref < elementsFor.length; ref++){
    let pMaClass = elementsFor[ref]; // on aurait pu utiliser aussi elementsFor.item(ref)
    pMaClass.style.borderWidth = (ref +1) + "px";
    pMaClass.style.borderStyle = "solid";
    pMaClass.style.borderColor = "black";
}

let texte = document.getElementsByTagName("p");
for (let y=0; y < texte.length; y++){
    let size = texte[y];
    size.style.fontSize = (y+1)*5 + "px";
}

// while de 0 à 10 afficher la valeur dans console

let nbr = 0;
while (nbr < 11){
    console.log(nbr);
    nbr++
}

for (let nbr2 = 0; nbr2<11; nbr2++ ){
    console.log(nbr2);
}
