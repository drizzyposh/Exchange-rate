const currencyEl_one = document.getElementById('currency-one');
const amountEL_one = document.getElementById('amount-one');
const currencyEl_two = document.getElementById('currency-two');
const amountEL_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap')

function calculate(){
    
    const currencyOne = currencyEl_one.value;
    const currencyTwo = currencyEl_two.value;


    let myApiKey = "c039374e3b20d7319e98ed27"

    fetch(`https://v6.exchangerate-api.com/v6/${myApiKey}/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)

    const rate = data.conversion_rates[currencyTwo]
        rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`

    amountEL_two.value = (amountEL_one.value * rate).toFixed(2);
    });

   
}

currencyEl_one.addEventListener('change', calculate);
amountEL_one.addEventListener('input', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEL_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value;

    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp

    calculate();
})

calculate();
