let rang;
let colonne;
let zone = document.querySelector('.zone');
let para = "";
let input = '<input type="checkbox" name="" id=""></input>';
let bouton = document.querySelector("#bouton");

//console.log(bouton);
bouton.onclick = function () {
    rang = document.querySelector("#rang").value; //l'appel de la valeur doit etre fait ici, pask sionn ben, le navigateur ben y voit que les valeur par défaut son vide. oui.
    colonne = document.querySelector("#colonne").value;
    //console.log(rang, colonne);

    for (i = 0; i < rang; i++) {
        //  para = zone.innerHTML += input;
        para += "<p>";
        for (i2 = 0; i2 < colonne; i2++) {
            para += input;
            console.log(para);
        }
        // para += input;
        para += "</p>";
        zone.innerHTML = para;
    }
};








