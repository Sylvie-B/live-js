let para1 = document.getElementById("text");
let span1 = document.getElementById("span1");
let span2 = document.getElementById("span2");
let result = document.getElementById("resultat");

let val5 = parseInt(span1.innerHTML);
let val12 = parseInt(span2.innerHTML);

result.innerHTML = (val5 + val12) > 0 ?  val5 + val12 : "autre";
