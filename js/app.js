
//Select the form.

const quoter = new API('6c3695d4e2243da7243d0dcbbd74b36517f6a4c4369aba2c8d1ee9712202f471')
const ui     = new Interface();

//Event Listener
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    //Select Currency

    const currency = document.querySelector('#currency');
    const selectedCurrency = currency.options[currency.selectedIndex].value;

    //Select cryptoCurrency
    const cryptoCurrency = document.querySelector('#cryptoCurrency');
    const selectedCryptoCurrency = cryptoCurrency.options[cryptoCurrency.selectedIndex].value;

    //Validation
    if(selectedCurrency === '' || selectedCryptoCurrency === ''){
        
				ui.showMessage('Both fileds are neccesary.', 'alert bg-danger text-center');
        clearTimeout(ui.timer);
        
				if (selectedCurrency === '') {
					currency.focus();
				} else {
					currency.focus();
				}

    }else {
      
    	quoter.obtainValues(selectedCurrency, selectedCryptoCurrency)
    	.then(data =>{
      	ui.showResult(data.RAW, selectedCurrency, selectedCryptoCurrency)
      });
       
    }

  
    
});


