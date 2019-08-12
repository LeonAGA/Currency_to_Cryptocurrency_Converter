class API {
    
      constructor(apikey){
          this.apikey = apikey;
      }  

      //Obtain all the coins.
      async obtainCurrencyAPI(){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
      
      // fetch API
        const urlObtainCurrency = await fetch(url);

     // JSON response
        const currency = await urlObtainCurrency.json();

     return currency;

    }


    async obtainValues(currency,cryptocurrency){

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}&api_key=${this.apikey}`;

      const urlConvertCurrency = await fetch(url);

      const value = urlConvertCurrency.json();

      return value;
    }
}
