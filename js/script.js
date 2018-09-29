// Setting up the variables
const myElement = document.getElementById("myName");
const blinker = document.getElementById("blinker");
const myText = myElement.innerText;

myElement.innerText = ""; // Clear #myName Element

let i = 0;
// This addes the word in the myNameText letter by letter
// It ignores Spacecs (I have no idea why... HELP!!)
/* 
    If you Changed the h1 element with the id of MyName in index.html
    to something with spaces, the spaces will be ignored, and the phrase will be typed as
    one word.
    EXAMPLE:
    Saleem Abu Shelbayeh will be typed as SaleemAbuShelbayeh  
  */
const brand = setInterval(() => {
  if (i < myText.length) {
    myElement.innerText += myText[i];
    i++;
  }
}, 100);
