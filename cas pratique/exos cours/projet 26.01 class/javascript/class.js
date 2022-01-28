///////////////  EXEMPLE 1   //////////////

// class Ligne {

//     constructor(nom, longueur) {
//         this.nom = nom;
//         this.longueur = longueur;
//     }

//     taille() {
//         document.getElementById('p1').innerHTML += 'Longueur de  ' + this.nom + ' : ' + this.longueur + '<br>'
//     };
// }

// let geo1 = new Ligne('geo1', 10);
// let geo2 = new Ligne('geo2', 5);
// geo1.taille();
// geo2.taille();

////////////////   EXEMPLE 2    ////////////


// class Rectangle {
//     constructor(longueur, largeur) {
//         this.longueur = longueur;
//         this.largeur = largeur;
//     }

//     get area() {
//         return this.calcArea();
//     }
//     calcArea() {
//         return this.longueur * this.largeur;
//     }


// }
// let carre = new Rectangle(10, 10);

// console.log(carre.area);


////////////////   EXEMPLE 3    ////////////


// class Ligne {
//     /*Nous n'avons pas besoin de préciser "function" 
//     devant notre constructeur
//     et nos autres méthodes classe*/
//     constructor(nom, longueur) {
//         this.nom = nom;
//         this.longueur = longueur;
//     }

//     taille() {
//         document.getElementById('p1').innerHTML +=
//             'Longueur de  ' + this.nom + ' : ' + this.longueur + '<br>'
//     };
// }

// let geo1 = new Ligne('geo1', 10);
// let geo2 = new Ligne('geo2', 5);
// geo1.taille();
// geo2.taille();

// class Rectangle extends Ligne {
//     constructor(nom, longueur, largeur) {
//         super(nom, longueur); //Appelle le constructeur 
//         // parent
//         this.largeur = largeur;
//     }

//     aire() {
//         document.getElementById('p2').innerHTML +=
//             'Aire de ' + this.nom + ' : ' + this.longueur * this.largeur + '<br>'
//     };
// }

// let geo3 = new Rectangle('geo3', 7, 5);
// geo3.aire();
// geo3.taille();

////////////////   EXOO 1 LES VOITURES    ////////////
// // /////////   faire une class voiture avec en paramètre marque, 
// modèle et année avec un fonction qui affiche les infos puis une 
// autre class autre qui étend de voiture et prends en paramètre :
//  couleur et carburant et fonction qui affiche toutes les infos ////////////

class Voiture {
    constructor(marque, modele, annee) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
    }
    affiChage() {
        document.getElementById("affichage").innerHTML = `<br> ${this.marque}  /  ${this.modele}  /  ${this.annee}  <br>`;

    };

}



// function showCar() {
//     let voiture = new Voiture("citroen", "ami", 2021);
//     voiture.affiChage();
// }

class Infoscar extends Voiture {
    constructor(marque, modele, annee, energie, couleur) {
        super(marque, modele, annee); //Appelle le constructeur parent//
        this.energie = energie;
        this.couleur = couleur;
    }

    newAffiChage() {
        document.getElementById("nouvelaffichage").innerHTML = `<br> ${this.marque}  /  ${this.modele}  /  ${this.annee} / ${this.energie} / ${this.couleur} <br>`;

    };
}

function showCar() {
    let voiture = new Voiture("citroen", "ami", 2021);
    voiture.affiChage();
    let myCar = new Infoscar("citroen", "ami", 2021, "electrique", "bleu");
    myCar.newAffiChage();
}