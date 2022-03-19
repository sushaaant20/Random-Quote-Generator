const quoteText = document.querySelector(".quote")
const quoteButton = document.querySelector(".new-quote")
const author = document.querySelector(".authText")
//const bgColor = document.querySelector("body > background")

function randomQuote(){
    fetch("http://api.quotable.io/random").then(response => response.json()) .then(result =>{
    quoteText.innerText = result.content;
    author.innerText = result.author;

    })
}

function randomColor(){
    bgColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = bgColor;
}

/*const setBg = () => {
    const randomColor = 
    Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
    bgColor.innerHTML = '#' + randomColor;
}*/

randomQuote()

quoteButton.addEventListener('click',randomQuote,randomColor)