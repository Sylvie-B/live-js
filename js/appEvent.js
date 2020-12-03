let button = document.getElementById("bouton");
let buttonDelete = document.getElementById("bouton2");
let input = document.getElementById("input1");

// + êvt listener au click sur un bouton
button.addEventListener("click", function (){
    console.log("le texte");
    });

// + êvt mouseenter sur input
input.addEventListener("mouseenter", function (){
    this.previousElementSibling.style.backgroundColor = "yellow";
    document.getElementById("label1").style.backgroundColor = "lightBlue";
});

// + êvt sortie de la zone qui reset
input.addEventListener("mouseleave", function (){
   document.getElementById("label1").style.backgroundColor = "initial";
});

function buttonClick() {
    this.style.width = "500px";
}

button.addEventListener("click", buttonClick); // buttonClick est une fonction mais ici on l'écrit sans ()

// ajout d'un êvt sur bouton delete event pour supprimer l'événement click
buttonDelete.addEventListener("click", function(){
    button.removeEventListener("click", buttonClick);
});

// bonus
let elements = document.getElementsByTagName("p");

for(let i = 0; i < elements.length; i++) {
    elements.item(i).style.backgroundColor = "black";
}

for(let paragraphe of elements) {
    paragraphe.style.backgroundColor = "#f62bca";
}

