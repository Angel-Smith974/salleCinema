let mesPlaces = document.querySelectorAll('.zone01 input');

console.log(mesPlaces);



function checkboxCocher(){
    if(document.querySelector('#01').checked == true){
        console.log(mesPlaces.indexOf, "celui-ci est coché");
    }
    else{
        console.log("y'a rien de coché");
    }
}
checkboxCocher();

console.log(mesPlaces.checked);