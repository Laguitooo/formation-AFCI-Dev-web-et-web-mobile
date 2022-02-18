/////////////////   INJECTION DES NOUVEAU BOUTONS AU CLICK +  //////////////////////

function ajoutHobbie() {
    document.getElementById("hobbies").innerHTML = `<label id="labelhobbie" class="label-group" for="hobbie">HOBBIE 4 :</label><input id="hobbie4" class="input-group" type="text" placeholder="Entrez votre hobbie 4 "/>  
     <label id="labelsupp" class="label-group" for="suppressionhobbie">SUPPRIMER UN HOBBIE : </label><button id="suppressionhobbie" class="btn-secondary" onclick="supprimerHobbies()"> - </button>
     <br>`;

};

/////////////////   SUPRESSION DES NOUVEAUX BOUTONS HOBBIE  //////////////////////
function supprimerHobbies() {
    document.getElementById("hobbie4").remove();
    document.getElementById("labelhobbie").remove();
    document.getElementById("suppressionhobbie").remove();
    document.getElementById("labelsupp").remove();


};

/////////////////   VARIABLES RECEPTIONS DES DONNEES FORMULAIRE /////////
class Formulaire {
    constructor(nom, prenom, mail, tel, hobbie1, hobbie2, hobbie3) {
        this.nom = nom;
        this.prenom = prenom;
        this.mail = mail;
        this.tel = tel;
        this.hobbie1 = hobbie1;
        this.hobbie2 = hobbie2;
        this.hobbie3 = hobbie3;
    }
    getInfos() {
        console.log(`${this.nom} : ${this.prenom} : ${this.mail} : ${this.tel} : ${this.hobbie1} : ${this.hobbie2} : ${this.hobbie3}`);
        alert(`${this.nom} : ${this.prenom} : ${this.mail} : ${this.tel} : ${this.hobbie1} : ${this.hobbie2} : ${this.hobbie3}`);
    }


};

let tableauDesInfos = [];


/// réception de données du formulaire par valeur ///

function getFormulaire() {
    let noms = document.getElementById("nom").value;
    let prenoms = document.getElementById("prenom").value;
    let mails = document.getElementById("mail").value;
    let tels = parseInt(document.getElementById("tel").value);
    let hobbies1 = document.getElementById("hobbie1").value;
    let hobbies2 = document.getElementById("hobbie2").value;
    let hobbies3 = document.getElementById("hobbie3").value;






    console.log(tableauDesInfos);
    newInfos = new Formulaire(noms, prenoms, mails, tels, hobbies1, hobbies2, hobbies3);
    tableauDesInfos.push(newInfos);
    newInfos.getInfos();
};