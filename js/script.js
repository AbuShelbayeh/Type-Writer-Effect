// Setting up the variables
const myElement = document.getElementById("myName");
const myName = "Saleem Abu Shelbayeh";

// This addes the word in the myNameText letter by letter
// Using textContent will preserve the spaces in the text.

let i = 0;
const brand = setInterval(() => {
  if (i < myName.length) {
    myElement.textContent +=  myName[i];
    i++;
  }
}, 100);
