let inDays = document.getElementById("inputDays");
let inHours = document.getElementById("inputHours");
let inMinutes = document.getElementById("inputMinutes");
let inSeconds = document.getElementById("inputSeconds");

let form = document.getElementById("button");



form.addEventListener("click", function(e){
    e.preventDefault();

    let year = document.getElementById("age");
    if (year.value === ""){
        document.getElementById("result").innerHTML = "Vous n'avez pas entré d'âge !";
    } else {
        document.getElementById("result").innerHTML = year.value;



        /*check jour*/ 
        if (inDays.checked){
            console.log("jours");
        }

        /*check heures*/ 
        else if (inHours.checked){
            console.log("heures");
        }

        /*check minutes*/ 
        else if (inMinutes.checked){
            console.log("minutes");
        }

        /*check secondes*/ 
        else if (inSeconds.checked){
            console.log("Secondes");
        }
    }
});

