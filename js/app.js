/*
let mesPlaces = document.querySelectorAll('.zone01 input');

console.log(mesPlaces);


function checkboxCocher(){
    if(document.getElementById('#01').checked == true){
        console.log(mesPlaces.indexOf, "celui-ci est coché");
    }
    else{
        console.log("y'a rien de coché");
    }
}
checkboxCocher();

console.log(mesPlaces.checked);
*/

let range = document.querySelector('#range');
let colonne = document.querySelector('#colonne');
let bouton = document.querySelector(".bouton");
//let monTableau = [];
let rangerDemander;
let colonneDemander;


//console.log(range.value);
//console.log(colonne);

function generer() {
    bouton.onclick = function () {
        //console.log(range.value, colonne.value);
        //console.log(range.value);
        // console.log(colonne.value);
        rangerDemander = range.value;
        colonneDemander = colonne.value;
        //monTableau.push(range.value, colonne.value);
        console.log(rangerDemander);
        console.log(colonneDemander);
    }

}



//console.log(monTableau);

//console.log("c'est moi indefine",rangerDemander);
generer();

