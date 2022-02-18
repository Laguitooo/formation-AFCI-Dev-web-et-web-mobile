/*let valeur = prompt("Entrez une couleur, un chiffre ou une lettre");
valeur = valeur.toLowerCase();

switch (valeur) {
    case "bleu":
        document.body.style.background = 'blue';
        break;
    case "rouge":
        document.body.style.background = 'red';
        break;
    case "1":
        document.body.style.background = 'black';
        break;
    case "2":
        document.body.style.background = 'yellow';
        break;
    case "q":
        alert("Quitter");
        break;
    default:
        alert("erreur de saisie");

} 
||||||||||||||||||||||||||     AUTRE EXOOOO          |||||||||||||||||||||||||||||

let valeur = prompt("Entrez une couleur, un chiffre ou une lettre");
valeur = valeur.toLowerCase();

function affichageColor(toto) {

    document.body.style.background = (toto);

}



switch (valeur) {
    case "bleu":
        affichageColor("blue");
        break;
    case "rouge":
        affichageColor("red");
        break;
    case "1":
        affichageColor("black");
        break;
    case "2":
        affichageColor("yellow");
        break;
    case "q":
        alert("Quitter");
        break;
    default:
        alert("erreur de saisie");

}


||||||||||||||||||||||||||     AUTRE EXOOOO          |||||||||||||||||||||||||||||


function somme(1, 5, 7) {
    let som = 1 + 5 + 7;
    return (som);
}
// function moyenne(x, y, z) {

//     return ((x + y + z) / 3);
// }


let m1;
m1 = somme(1, 5, 7);


doDW("la somme de (5,6,7) est " + m1 );
m1 = somme(15, 17, 10);
doDW("la somme de (15,17,10) est " + m1 );

let moy1;
moy1 = moyenne(5, 6, 7);
doDW("la moyenne de (5,6,7) est " + moy1);
moy1 = moyenne(15, 17, 10);
doDW("la moyenne de (15,17,10) est " + moy1);


||||||||||||||||||||||||||     AUTRE EXOOOO          |||||||||||||||||||||||||||||




function func1(x, y) {
    let som1 = x + y;
    return (som1);
}
/*on peut aussi faire:
function func1(x, y) {
    return (som1);
}*/

/* function func2(x, y) {
    let mult2 = x * y;
    return (mult2);
}

function func3(x, y) {
    return (func1 + 2 * func2);
}

prompt("Rentrer un chriffre compris entre 2 et 9")

function func4(n, c) {
    for (let i = 0; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            document.write(c);
        }
        document.write("<br>");
    }
}*/

/*|||||||||||||||||||||||||||||||   EXO 5     |||||||||||||||||||||||||||| 

*/

function func5(n, c) {
    let i, j, k;
    k = n - 1;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= k; j++) {
            document.write(" ");
        }

        for (j = 1; j <= 2 * i - 1; j++) {
            document.write(c);
        }
        document.write("<br>");
        k--;
    }
}

/*function funct5(num, motif) {
    let i, j, k;
    k = num -1;
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= k; j++) {
            document.write(" ");
        }
        for (j = 1; j <= 2 * i - 1; j++) {
            document.write(motif);
        }
        document.write("<br>");
        k--;                    
    }
 }*/