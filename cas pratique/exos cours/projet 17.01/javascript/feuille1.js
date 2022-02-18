// \\\\\\\\\\\\\\____changement img au passage souris_____\\\\\\\\\\\\\\\

const firstImag = document.getElementById("blocg1");
console.log(typeof firstImag);
const newImg = ["url(/projet 17.01/images/borabora.jpg)", "url(/projet 17.01/images/bali.jpg", "url(/projet 17.01/images/bungalownight.jpg", "url(/projet 17.01/images/palmito.jpg"];
let count = 0;

firstImag.addEventListener('mouseenter', function() {
    if (count == 3) {
        count = 0
    } else {
        count += 1
    }

    this.style.backgroundImage = newImg[count]
})


// \\\\\\\\\\\\\\____CALCULATRICE_____\\\\\\\\\\\\\\\


// \\\\\\\\\\\\\\____RECUPERER INFO INPUT_____\\\\\\\\\\\\\\\

const opSoustraction = document.getElementById("moins");
const opAddition = document.getElementById("plus");
const opDiviser = document.getElementById("diviser");
const opMultiplier = document.getElementById("multiplier");

opSoustraction.addEventListener('click', function() {

    const nombre1 = parseFloat(document.getElementById("nbr1").value);
    const nombre2 = parseFloat(document.getElementById("nbr2").value);

    console.log(nombre1, nombre2);
    document.getElementById("total").innerText = (nombre1 - nombre2).toFixed(2);
})
opAddition.addEventListener('click', function() {

    const nombre1 = parseFloat(document.getElementById("nbr1").value);
    const nombre2 = parseFloat(document.getElementById("nbr2").value);

    console.log(nombre1, nombre2);
    document.getElementById("total").innerText = (nombre1 + nombre2).toFixed(2);
})
opDiviser.addEventListener('click', function() {

    const nombre1 = parseFloat(document.getElementById("nbr1").value);
    const nombre2 = parseFloat(document.getElementById("nbr2").value);

    console.log(nombre1, nombre2);
    document.getElementById("total").innerText = (nombre1 / nombre2).toFixed(2);
})
opMultiplier.addEventListener('click', function() {

    const nombre1 = parseFloat(document.getElementById("nbr1").value);
    const nombre2 = parseFloat(document.getElementById("nbr2").value);

    console.log(nombre1, nombre2);
    document.getElementById("total").innerText = (nombre1 * nombre2).toFixed(2);
})



// \\\\\\\\\\\\\\____PLACER LE RESULTAT DANS L'INPUT TOTAL_____\\\\\\\\\\\\\\\



// \\\\\\\\\\\\\\____EVENEMENT SUR CLICK IMAGE_____\\\\\\\\\\\\\\\

function cHange(imgrond) {

    const taille = imgrond.style.transform;

    if (taille === "scale(1.2)") {
        imgrond.style.transform = "scale(1)";
    } else {

        imgrond.style.transform = "scale(1.2)";
    }
}

// \\\\\\\\\\\\\\____CHANGEMENT DE THEME AU CLICK_____\\\\\\\\\\\\\\\