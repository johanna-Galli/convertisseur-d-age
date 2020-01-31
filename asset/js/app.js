
/* valeur de l'age entré par l'utilisateur */
let age = document.getElementById("age");

/* le formulaire */
let form = document.getElementById("button");

/* detecte les imputs type radio */
let inputMonths = document.getElementById("inputMonths");
let inputWeeks = document.getElementById("inputWeeks");
let inputDays = document.getElementById("inputDays");
let inputHours = document.getElementById("inputHours");
let inputMinutes = document.getElementById("inputMinutes");
let inputSeconds = document.getElementById("inputSeconds");

/*fonction pour rendre lisible un nombre*/

function lisibilite_nombre(nbr) {
    var nombre = ''+nbr; 
    var retour = ''; 
    var count=0; 
    for(var i=nombre.length-1 ; i>=0 ; i--) { 
        if(count!=0 && count % 3 == 0) retour = nombre[i]+' '+retour ; 
        else retour = nombre[i]+retour ; 
        count++; 
    } 
        return retour; 
}




/* champs ou va s'afficher les resultats ou les messages d'erreur */
let result = document.getElementById("result");


/* évenement au submit du formulaire */
form.addEventListener("click", function (e) {
    e.preventDefault();

    /* si le champs age est vide*/
    if (age.value !== "") {

        /* si le champs age est compris entre 1 et 114*/
        if (age.value < 115 && age.value > 0) {

            /*si on a choisi de la convertir en mois*/
            if (inputMonths.checked) {
                let months = (age.value) * 12;
                result.innerHTML = lisibilite_nombre(months) + " mois";
            }
            /*si on a choisi de la convertir en semaines*/
            if (inputWeeks.checked) {
                let weeks = (age.value) * 52;
                result.innerHTML = lisibilite_nombre(weeks) + " semaines";
            }
            /*si on a choisi de la convertir en jours*/
            if (inputDays.checked) {
                let days = (age.value) * 365;
                result.innerHTML = lisibilite_nombre(days) + " jours";
            }
            /*si on a choisi de la convertir en heures*/
            else if (inputHours.checked) {
                let hours = ((age.value) * 365) * 24;
                result.innerHTML = lisibilite_nombre(hours) + " heures";
            }
            /*si on a choisi de la convertir en minutes*/
            else if (inputMinutes.checked) {
                let minutes = (((age.value) * 365) * 24) * 60;
                result.innerHTML = lisibilite_nombre(minutes) + " minutes";
            }
            /*si on a choisi de la convertir en secondes */
            else if (inputSeconds.checked) {
                let secondes = ((((age.value) * 365) * 24) * 60) * 60;
                
                result.innerHTML = lisibilite_nombre(secondes) + " secondes";
            }
        } else {
            result.innerHTML = "Merci d'entrer un âge valide ...";
        }
    } else {
        result.innerHTML = "Vous n'avez pas entré d'âge !";
    }
});