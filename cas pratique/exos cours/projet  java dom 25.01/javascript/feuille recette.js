/////////////////   INJECTION DES NOUVEAU BOUTONS AU CLICK +  //////////////////////

// // function ajoutIngredient() {
// //     const valider = document.getElementById("ingredientetquantite").innerText.length;
// //     console.log(valider);
// //     document.getElementById("ingredientetquantite").innerHTML += `
// <
// label id = "ing"
// for = "ingredient" > INGREDIENTS: < /label> <
// input id = "ingredient"
// type = "text"
// placeholder = "Ingrédients" / >

//     <
//     label id = "quant"
// for = "quantite" > GRAMMES: < /label> <
// input id = "quantite"
// type = "number"
// placeholder = "Quantités" / >
//     <
//     label id = "labelsupp"
// for = "suppressioningredient" > Supprimer un ingrédient: < /label> <
// button id = "suppressioningredient"
// onclick = "supprimerIngredient()" > - < /button>
//     //      <br><br><br>`;

// //     if (valider === 1) {
// //         document.getElementById("ingredientetquantite").innerHTML += `<label id="labelvalider" for="Valider">VALIDER LA RECETTE : </label><button id="Valider" onclick="getRecette()"> VALIDER :) </button>}`;
// //     }
// // };

let compteur = 0;

function ajoutIngredient() {
    const valider = document.getElementById("ingredientetquantite").innerText.length;
    console.log(valider);
    document.getElementById("ingredientetquantite").innerHTML +=


        if


    const labeling = document.createElement("label");
    const inputing = document.createElement("input");
    const labelquant = document.createElement("label");
    const inputquant = document.createElement("input");
    const labelsupp = document.createElement("label");
    const buttonsupp = document.createElement("button");

    labeling.setAttribute("id", "ing" + compteur);
    inputing.setAttribute("id", "ingredient" + compteur);
    labelquant.setAttribute("id", "quant" + compteur);
    inputquant.setAttribute("id", "quantite" + compteur);
    labelsupp.setAttribute("id", "labelsupp" + compteur);
    buttonsupp.setAttribute("id", "suppressioningredient" + compteur);

    labeling.setAttribute("for", "ingredient" + compteur);
    labelquant.setAttribute("for", "quantite" + compteur);
    labelsupp.setAttribute("for", "suppressioningredient" + compteur);



    inputing.setAttribute("type", "text");
    inputquant.setAttribute("type", "number");
    inputing.setAttribute("placeholder", "Ingrédients");
    inputquant.setAttribute("placeholder", "Quantités");

    buttonsupp.setAttribute("onclick", "supprimerIngredient(" + compteur + ")");

    buttonsupp.innerText = "-";

    divIngEtQuant.appendChild(labeling);
    divIngEtQuant.appendChild(inputing);
    divIngEtQuant.appendChild(labelquant);
    divIngEtQuant.appendChild(inputquant);
    divIngEtQuant.appendChild(labelsupp);
    divIngEtQuant.appendChild(buttonsupp);

    compteur++;

}

const divIngEtQuant = document.getElementById("ingredientetquantite")


/////////////////   SUPRESSION DES NOUVEAUX BOUTONS INGREDIENT ET QUANTITES  //////////////////////
function supprimerIngredient(index) {
    document.getElementById("ingredient" + index).remove();
    document.getElementById("quantite" + index).remove();
    document.getElementById("ing" + index).remove();
    document.getElementById("quant" + index).remove();
    document.getElementById("suppressioningredient" + index).remove();
    document.getElementById("labelsupp" + index).remove();

    document.getElementById("labelvalider" + index).remove();
    document.getElementById("Valider" + index).remove();

}



/////////////////   VARIABLES RECEPTIONS DES DONNEES RECETTES /////////
class Recette {
    constructor(nomrecette, nbrpers, temperature, temps, ingredient, quantite) {
        this.nomrecette = nomrecette;
        this.nbrpers = nbrpers;
        this.temperature = temperature;
        this.temps = temps;
        this.ingredient = ingredient;
        this.quantite = quantite;
    }
    getInfos() {
        console.log(`${this.nomrecette} : ${this.nbrpers} : ${this.temperature} : ${this.temps} : ${this.ingredient} : ${this.quantite}`);
    }

}

let tableauDesRecettes = [];


/// réception de données recette par valeur ///
function getRecette() {
    let newRecette = document.getElementById("nomrecette").value;
    let nbrPers = parseInt(document.getElementById("nombrepers").value);
    let temperature = parseFloat(document.getElementById("temperature").value);
    let temps = parseFloat(document.getElementById("temps").value);
    let ingredient = document.getElementById("ingredient").value;
    let quantite = parseFloat(document.getElementById("quantite").value);
    tableauDesRecettes.push(newRecette);
    console.log(tableauDesRecettes);
    newRecette = new Recette(newRecette, nbrPers, temperature, temps, ingredient, quantite);

    newRecette.getInfos();
}




/////////////////   tableau permettant d'organiser les recettes //////////
// ajoutRecetteSelect() {
//     document.write(tableauDesRecettes);
// }