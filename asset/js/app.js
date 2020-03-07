
/* valeur de l'age entré par l'utilisateur */
let age = document.getElementById("age");

/* le formulaire */
let form = document.getElementById("button");

/* detecte les imputs type checkbox */
let inputMonths = document.getElementById("inputMonths");
let inputWeeks = document.getElementById("inputWeeks");
let inputDays = document.getElementById("inputDays");
let inputHours = document.getElementById("inputHours");
let inputMinutes = document.getElementById("inputMinutes");
let inputSeconds = document.getElementById("inputSeconds");

/*fonction pour rendre lisible un nombre*/
function lisibilite_nombre(nbr) {
    var nombre = '' + nbr;
    var retour = '';
    var count = 0;
    for (var i = nombre.length - 1; i >= 0; i--) {
        if (count != 0 && count % 3 == 0) retour = nombre[i] + ' ' + retour;
        else retour = nombre[i] + retour;
        count++;
    }
    return retour;
}

/* tableau des checkbox */

let check = document.getElementsByName('choice');
const typeConvert = ['months', 'weeks', 'days', 'hours', 'minutes', 'seconds'];


function calcul(typeConvert, ageValue) {
    let resultat = document.getElementById("result");
    let result = '';
    if (typeConvert == 'months') {
        result = (ageValue) * 12;
        result += " mois ";
        result.innerHTML = lisibilite_nombre(months) + " mois ";
    }
    if (typeConvert == 'weeks') {
        result += (ageValue) * 52;
        result += " semaines ";
        result.innerHTML = lisibilite_nombre(weeks) + " semaines ";
    }
    if (typeConvert == 'days') {
        result += (ageValue) * 365;
        result += " jours ";
        result.innerHTML = lisibilite_nombre(days) + " jours ";
    }
    if (typeConvert == 'hours') {
        result += ((age.value) * 365) * 24;
        result += " hours ";
        result.innerHTML = lisibilite_nombre(hours) + " heures ";
    }
    if (typeConvert == 'minutes') {
        result += (((age.value) * 365) * 24) * 60;
        result += " minutes ";
        result.innerHTML = lisibilite_nombre(minutes) + " minutes ";
    }
    if (typeConvert == 'seconds') {
        result += ((((age.value) * 365) * 24) * 60) * 60;
        result += " secondes ";
        result.innerHTML = lisibilite_nombre(seconds) + " secondes ";
    }
    resultat.innerHTML = result;
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

            
                        for (let i = 0; i < check.length; i++) {
                            if (check[i].checked == true) {
                                if (check[i].value == typeConvert[i]) {
                                    if (typeConvert[i] = "months") {
                                        let months = (age.value) * 12;
                                        
                                    }
                                    if (typeConvert[i] = "weeks") {
                                        let weeks = (age.value) * 52;
                                        result.innerHTML = lisibilite_nombre(weeks) + " semaines ";
                                    }
                                    
                                    result.innerHTML = typeConvert[i];
                                } else {
                                    result.innerHTML = "selectionnez un produit";
                                }
                            }
                        }

             /*           
            for (let i = 0; i < check.length; i++) {
                if (check[i].checked == true) {
                    /*si on a choisi de la convertir en mois
                    if (inputMonths.checked) {

                        let months = (age.value) * 12;
                        result.innerHTML = lisibilite_nombre(months) + " mois ";
                    }
                    /*si on a choisi de la convertir en semaines*
                    if (inputWeeks.checked) {

                        let weeks = (age.value) * 52;
                        result.innerHTML = lisibilite_nombre(weeks) + " semaines ";
                    }
                    /*si on a choisi de la convertir en jours*
                    if (inputDays.checked) {
                        let days = (age.value) * 365;
                        result.innerHTML = lisibilite_nombre(days) + " jours ";
                    }
                    /*si on a choisi de la convertir en heures*
                    if (inputHours.checked) {
                        let hours = ((age.value) * 365) * 24;
                        result.innerHTML = lisibilite_nombre(hours) + " heures ";
                    }
                    /*si on a choisi de la convertir en minutes*
                    if (inputMinutes.checked) {
                        let minutes = (((age.value) * 365) * 24) * 60;
                        result.innerHTML = lisibilite_nombre(minutes) + " minutes ";
                    }
                    /*si on a choisi de la convertir en secondes *
                    if (inputSeconds.checked) {
                        let secondes = ((((age.value) * 365) * 24) * 60) * 60;

                        result.innerHTML = lisibilite_nombre(secondes) + " secondes ";
                    }
                }
            }*/
        } else {
            result.innerHTML = "Merci d'entrer un âge valide ...";
        }
    } else {
        result.innerHTML = "Vous n'avez pas entré d'âge !";
    }
});