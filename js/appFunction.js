// le but sera de modofier des "trucs" sur les paragraphes

function colorElement(idElement, couleurFond, couleurText, taille, largeur) {
    let element = document.getElementById(idElement);
    element.style.backgroundColor = couleurFond;
    element.style.border = "1px solid black";
    element.style.color = couleurText;
    element.style.fontSize = taille + "px";
    element.style.width = largeur + "px";
    console.log(element);
}

colorElement("p1", "darkgrey", "white", 15, 200);
colorElement("p2", "yellow", "black",20, 160);
colorElement("p3", "blue", "yellow", 25, 130);
colorElement("p4", "green", "lightBlue", 30, 120);


function calcul(nombre1){
    return nombre1 + 10;
}

let result = calcul();
console.log("calcul =" + result);

function multi(nbr1, nbr2){
    document.getElementById("p1").innerHTML = (nbr1 * nbr2).toString();
    return nbr1*nbr2;
}

console.log(multi(5,10));

let result3 = multi(5, 10) + calcul(5);
console.log("mon résultat : " + result3);

