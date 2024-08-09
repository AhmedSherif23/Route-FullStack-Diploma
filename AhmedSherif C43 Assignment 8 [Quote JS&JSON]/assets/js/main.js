
const quoteBtn = document.getElementById('quote_btn');
const quotePara = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const quoteAvater = document.getElementById('avater');
const quoteSection = document.getElementById('quoteSection');
let baseUrl = 'assets/Data/data.json';
let QuotesList, currentquote;

const generateRandomNum = (length) => {
    return Math.trunc(Math.random() * length);
};

const fetchData = (url) => {
    return fetch(url)
        .then(response => response.json());
};

function updateQuote(Quotes) {
    let randomNum = generateRandomNum(Quotes.length);
    let quoteObj = Quotes[randomNum];

    if (quoteObj.quote !== currentquote) {
        quotePara.textContent = `"${quoteObj.quote}"`;
        quoteAuthor.textContent = `-- ${quoteObj.author}`;
        quoteAvater.setAttribute('src', quoteObj.avater);
        quoteSection.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 90%), rgba(0, 0, 0, 95%)),url(${quoteObj.avater})`;
        currentquote = QuoteObj.quote;
    }
}

window.addEventListener('load', async () => {
    quotesList = await fetchData(baseUrl);
});

quoteBtn.addEventListener('click', () => {
    updateQuote(quotesList);
});
