// variables
const newQuoteBtn = document.querySelector('#new-quote-btn');
const quote = document.querySelector('.quote-container');

// link to get quote from api
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

// Event Listener | Generate New Quote
newQuoteBtn.addEventListener('click' , getQuote);

async function getQuote(){
    const response = await fetch(endpoint)
    
    if(!response.ok){
        throw Error(response.statusText);
    }

    const jsonFormat = await response.json();
    displayQuote(jsonFormat.message); // calling function to display quote
}

function displayQuote(newQoute){
    quote.innerHTML = newQoute;
}

getQuote(); // calling function to show a random quote on load for first time or refreshed

