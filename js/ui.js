class Interface  {

    constructor(){
        this.init();
    }

    init(){
        this.selectConstructor();
    }

    selectConstructor(){
       quoter.obtainCurrencyAPI()
       .then(currency => {

            const select = document.querySelector('#cryptoCurrency')

            //Obtain the API values.
            for(const [key, value] of Object.entries(currency.Data)){
               // Add symbol and name as opcions for select.
               const option = document.createElement('option');
               option.value = value.Symbol;
               option.appendChild(document.createTextNode(value.CoinName));
               select.appendChild(option);
            }

       });
    }

    showMessage(message, classes){


          const firstMessage = document.querySelector('.messages > div');
        
		  if(firstMessage){
            firstMessage.remove();
		  }

        const div = document.createElement('div');
        div.className = `${classes} appear`;
        div.appendChild(document.createTextNode(message));
        const divMessage = document.querySelector('.messages');
        divMessage.appendChild(div);

			//Show content.
            const timer = setTimeout(()=>{
                if (document.querySelector('.messages > div')){
                    document.querySelector('.messages > div').remove();
                }
            },2100);
    }

    showResult(result, currency, cryptoCurrency){

        //If there is a 2nd consult, hidden the 1st.
        const firstResult  = document.querySelector('#result > div');

        if(firstResult){
            firstResult.remove();
        }

		try{

        const currencyResult = result[cryptoCurrency][currency];


        //Adjust numbers.
        let price   = currencyResult.PRICE.toFixed(2),
            porcent = currencyResult.CHANGEPCTDAY.toFixed(2),
            updated = new Date(currencyResult.LASTUPDATE * 1000).toLocaleDateString('en-USA');

        //Template.
        let templateHTML = `
            <div class="card bg-warning">
                <div class="card-body text-light">
                <h2 class="card-title">Result:</h2>
                <p>The price of ${currencyResult.FROMSYMBOL} to currency
                ${currencyResult.TOSYMBOL} is: ${price}</p>
                <p> The variation of the last day: % ${porcent}</p>
                <p> The last update was: ${updated}</p>
                </div>
            </div>
        `;

				this.showHiddenSpinner('block');

        setTimeout(()=>{
							 // Insert the result.
			this.showHiddenSpinner('none');
			document.querySelector('#result').innerHTML = templateHTML;
		},3000);

		}catch(err){
			this.showMessage(`We don´t have the convertion from ${currency} to ${cryptoCurrency}`,'alert bg-danger text-center');
			console.log(err);
		}

    }

    showHiddenSpinner(show){

				//Show the spinner and adjust the form
				const form 	  = document.querySelector('#form');
				const spinner = document.querySelector('.spinner');
				const shadow  = document.querySelector('.shadow');

				form.classList.add("used");
				spinner.style.display = `${show}`;
				shadow.style.display  = `${show}`;
    }

}