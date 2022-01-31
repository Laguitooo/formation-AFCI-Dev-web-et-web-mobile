const jsSlide = document.getElementById("slide");
const jsSlideLeft = document.getElementById("slideleft");
const jsSlideRight = document.getElementById("slideright");


const tab = ['url("imag/canyonNationalpark.jpg")', 'url("imag/polynesia.jpg")', 'url("imag/beachcaraibes.jpg")', 'url("imag/ville.jpg")', 'url("imag/maldives.jpg")'];

console.log(tab);
let count = 0;

function affichage() {

    setInterval(function() {
        console.log(count)
        if (count === 4) {
            count = 0;
        } else {
            count++;
        }

        jsSlideLeft.style.backgroundImage = getImg(count);
        jsSlide.style.backgroundImage = getImg(count + 1);
        jsSlideRight.style.backgroundImage = getImg(count + 2);

    }, 1500);



};

affichage();

function getImg(count) {
    if (count >= tab.length) {
        count -= tab.length
    }
    return tab[count]
}