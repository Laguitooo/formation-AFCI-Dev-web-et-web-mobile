////////                                ///////////////
////////             Fonction reduce    ///////////////
////////                                ///////////////



var Personnes = [
    { nom: "Martine", married: false },
    { nom: "Emmanuelle", married: true },
    { nom: "Emilie", married: false },
    { nom: "Coralie", married: true },
    { nom: "Aurelie", married: false }
];

function funcAgregation(resultat, person) {
    var prop = person.married;
    if (!resultat[prop]) {
        resultat[prop] = [];
    }
    resultat[prop].push(person);
    return resultat;
}
var repartitionMarried = Personnes.reduce(funcAgregation, {});

console.log(repartitionMarried);

////////                                ///////////////
////////        Fonction reduce exo 2  ///////////////
////////                                ///////////////

G1 = [12, 14, 08, 11, 17];
G2 = [10, 15, 11, 14, 05];
G3 = [13, 12, 14, 16, 10];
G4 = [6, 19, 10, 19, 13];






0: { mg1: 12.4, max: 17, min: 8 }
1: { mg2: 11, max: 15, min: 5 }
2: { mg3: 13, max: 16, min: 10 }
3: { mg4: 13.4, max: 19, min: 6 }
length: 4[[Prototype]]: Array(0)