
//Select the form.

const ui = new Interface();
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
        
        ui.showMessage('Ambos campos son Obligatorios', 'alert bg-danger text-center');

    }else {


    }

  
    
});


