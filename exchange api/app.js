const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const currency = new Currency("USD","TRY");

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input",exchangeCurrency);
    
    firstSelect.onchange = function(){
        currency.exchangeFirstCurrency(firstSelect.option[firstSelect.selected]);
    };

    secondSelect.onchange = function(){
        currency.changeSecondCurrency(secondSelect.option[secondSelectç.selected]);
    };
    
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    
    currency.exchange()
    .then(result => console.log(result))
    .catch(err => console.log(err));
}