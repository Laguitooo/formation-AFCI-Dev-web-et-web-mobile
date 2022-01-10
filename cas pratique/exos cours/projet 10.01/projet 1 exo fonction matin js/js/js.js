// monTest = 2;
// monTest2 = "2";
// if (monTest === monTest2) {
//     document.write("===OK");
//     alert("=== OK ");
// } else if (monTest == monTest2) {
//     document.write("==OK");
//     alert("==OK")
// } else if (monTest != monTest2) {
//     document.write("!different");
//     alert("!= différent");
// } else {}

// for (x = 0; x < 60; x++) {
//     document.write (x * 2 + "<br>");
// }

// let x = 0;
// while (x < 11) {
//     document.write(7 * x + "<br>");
//     x++;
// let x = 0
// do {
//     document.write(x * 4 + "<br>")
//     x++
// } while (x < 11);
// let nbr1 = x
// let nbr2 = y

// let nbr1 = prompt("entrez un chiffre compris entre 0 et 20");

// if (nbr1 < 0 || nbr1 > 20) {
//     alert("erreur de saisie");

// } else if (nbr1 >= 0 || nbr1 <= 20) {

//     for (x = 0; x <= 20; x++) {
//         document.write(nbr1 * x + "<br>");

//     }
// }





// for (x = 0, x <= 20, x++) {
//     // document.write(x * 5 + "<br>");
//     // prompt(x * 5 + "multiple de 5" + "<br>");
//     if (x % 2 == 0) {
//         alert("OK")
//     } else if (x % 2 != 0) {
//         alert("erreurs de saisi")
//     }
// }
/* -------------------------------------------------------------------------- */
/*                                     /TABLEAUX/                                     */
/* -------------------------------------------------------------------------- */

// const list = ['a', 'b', 'c', 'd'];
// list.forEach((item, index) => {
//     document.write(item + index + "<br>")
// });

/* -------------------------------------------------------------------------- */
/*                                     /EXEMPLE TABLEAUX ENCORE/                                     */
// /* -------------------------------------------------------------------------- */
// const list = [3, 61, 72, 101, 10, 23, 31, 45, 7, 9];
// const list2 = [];


// list.forEach((test, index) => {
//     if (test % 2 === 0) {
//         document.write("_" + test)
//     } else {
//         (list2.push(test));
//     }
// });

// document.write("<br>" + "<br>")

// list2.forEach((test, index) => {
//     document.write("_" + test)
//     console.log(test)
// });


/* -------------------------------------------------------------------------- */
/*                                     /Nouveau tableau/                                     */
/* -------------------------------------------------------------------------- */


const tab = [1, 8, 3, 5, 12, 9, 11, 4, 15, 16];

tab.forEach((item, index) => {
    document.write("_" + item)

})
const tabSorted = tab.sort();