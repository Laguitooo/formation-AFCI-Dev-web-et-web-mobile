const txtdedans = document.getElementById("dedans")

// console.log(txtdedans);

// console.log(txtdedans.parentElement)

// console.log(txtdedans.parentElement.parentElement.children[0])
// console.log(txtdedans.parentElement.parentElement.children[2])


// |||||||||||||||||||||||||||  CORRECTION  |||||||||||||||||||||||||||

const elt = document.getElementById('dedans');
const elt2 = document.getElementById('main');

console.log(elt); // elt dedans

console.log(elt2); // elt main

console.log(elt2.children); // parent de dedans
elt.parentElement.innerText += " ok";

console.log(elt2.previousElementSibling);

console.log(elt2.lastChild); // dernier enfant
console.log(elt2.childNodes); // elt precedent

console.log(elt2.parentElement); // parent de main

// ||||||||||||||||||||||||||||  NEW EXO  |||||||||||||||||||||||||||||