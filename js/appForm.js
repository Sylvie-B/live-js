let button = document.getElementById("envoyer");

button.addEventListener("click", function (event) {
    // qd on click le form est envoyé vers php
    // hors nous n'avons pas étudié php
    // donc on empêche le bouton d'envoyer le formulaire
    event.preventDefault();

    // on récupére les 3 champs
    let champsNom = document.getElementById("nom");
    let champsPrenom = document.getElementById("prenom");
    let champsPassword = document.getElementById("password");

    // on veut la valeur
    let valNom = champsNom.value;
    let valPrenom = champsPrenom.value;
    let valPassW = champsPassword.value;

    console.log(valNom, valPrenom, valPassW);

    console.log(
        document.getElementById("nom").value,
        document.getElementById("prenom").value);

    // pour un select
    let select = document.getElementById("select");
    let selection = select.options[select.selectedIndex].value;
    console.log("ma selection : " + selection);

});

    let textarea = document.getElementById("area");
    let span = document.getElementById("max")

    textarea.addEventListener("keypress", function (event){
    if (textarea.value.length < 250) {
        span.innerHTML = "il vous reste" + (250 - textarea.value.length) + " caractéres";
    }
    else {
    }
});

