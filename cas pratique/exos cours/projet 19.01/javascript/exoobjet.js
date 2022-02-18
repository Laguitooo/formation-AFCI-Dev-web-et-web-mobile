//////////////////////FIRST STEP OBJET/////////////////////

let mesLoisirs = { sport: "GLISSE", cuisine: "Barbecue", autre: "VOYAGE" };



for (let i in mesLoisirs) {
    if (mesLoisirs.hasOwnProperty(i)) {
        console.log(mesLoisirs[i]);
        document.write(mesLoisirs[i] + "<br>");
    }

}

////////////////////// SND STEP OBJET/////////////////////


let monTab = { nom: "moi", prenom: "lui" };



for (let i in monTab) {
    if (monTab.hasOwnProperty(i)) {
        console.log(monTab[i]);
        document.write(monTab[i] + "<br>");
    }

}

let monAdresse = { cp: "02190", rue: "Rue du point du jour", ville: "Laon" };



for (let i in monAdresse) {
    if (monAdresse.hasOwnProperty(i)) {
        console.log(monAdresse[i]);
        document.write(monAdresse[i] + "<br>");
    }

}