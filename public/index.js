const idNumber = document.querySelector('#id');
const quote = document.querySelector('#quote');
const button = document.querySelector('#btn');

button.addEventListener('click', () => {
    newQuote();
});

window.onload = () => {
    newQuote();
};

function newQuote(){
    fetch('https://api.adviceslip.com/advice').then(res => {
    return res.json();
}).then(data => {
    const newQuote = data.slip;
    idNumber.innerHTML = `Advice #${newQuote.id}`
    quote.innerHTML = `<p>"${ newQuote.advice }"</p>`
});
}