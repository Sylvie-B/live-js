let div1 = document.getElementById("premier-div");
let div2 = document.getElementById("second-div");

// créer l'élément
let newSpan = document.createElement("span");
newSpan.id = "js-ajout";
newSpan.className = "spanBackground";
newSpan.classList.add("spanTextColor");
newSpan.classList.remove("blabla");
newSpan.innerHTML = "nouveu texte";

// placer dans le parent

div1.append(newSpan); // ajoute à la fin du parent
div1.prepend;(newSpan); // au début
let p2 = document.getElementById("p2");
div1.insertBefore(newSpan, p2);

// je veux une fonction qui crée TOUT le temps un span, avec un id en parametre
function createSpanElement(idSpan, texte, parent) {
    let newSpan = document.createElement("span");
    newSpan.id = idSpan;
    newSpan.innerHTML = texte;
    parent.append(newSpan);
    // return newSpan si on veut l'utiliser dans console.log par exemple
}

let geeks = createSpanElement("les-geeks", "mon nouveau span", div1);
let student = createSpanElement("les-student", "js c'est cool", div2);
let studentsV2 = createSpanElement("les-students-v2","js c'est cool, pour sur", document.body);

// studentsV2.remove(); // suppression à  partir de lui même
// studentsV2.parentElement.removeChild(studentsV2); // suppression à partir de l'élément parent

