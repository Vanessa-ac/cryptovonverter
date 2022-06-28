// include api for currency change

// all available controls
var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;
  
// before currency is changed
//it has to be from the api
  
// after currency is changed
//from the api too

  
//  to update current value
function updateValue(e) {
    searchValue = e.target.value;
}
  
//on clicking, it calls function getresults 
convert.addEventListener("click", getResults);
 document.getElementById("finalAmount").index.html = "finalAmount";
  
// function getresults
function getResults() {
    fetch(`${api}`)
        .then(currency => {
            return currency.json();
        }).then(displayResults);
}
  
//to display results after conversion
function displayResults(currency) {
    let fromRate = currency.rates[resultFrom];
    let toRate = currency.rates[resultTo];
    finalValue = 
       ((toRate / fromRate) * searchValue);
   ;
}
console.log("finalValue");
  
// clicking on reset button
function clearValue() {
    index.html.reload();
    document.getElementsByClassName("finalValue").index.html = "";
};

