
//Select the form.

let form = document.querySelector('#form');

//Event Listener
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    //Select Currency

    const currency = document.querySelector('#currency');
    const selectedCurrency = currency.options[currency.selectedIndex].value;

    //Select cryptocurrency

    const cryptocurrency = document.querySelector('#cryptocurrency');
    const selectedcryptocurrency= cryptocurrency.options[cryptocurrency.selectedIndex].value;

    //Validation
    if(selectedCurrency === '' || selectedcryptocurrency === ''){


    }else {


    }

  
    
});


