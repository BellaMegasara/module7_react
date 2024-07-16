import { useEffect, useState } from "react";
import { useData } from "../hooks/useData";

export const LabTwo = () => {

    //states/var
    const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
    const BitcoinRates = () => {
        const [currency, setCurrency] = useState(currencies[0]);
        const [rate, setRate] = useState(0);
        const [data, isLoading] = useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`);

        useEffect(()=> {
            if (data && 
    

        const options = currencies.map((curr) => (
            options value={curr} key={curr}
            {curr}
            </options>
        ));
    

      //return
      return(
        <div className="BitcoinRates componentBox">
              <h3>Bitcoin Exchange Rate</h3>
              <label>
                  Choose Currency:
                  <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
                      {options}
                  </select>
              </label>
  
              <div>
                  <h4>Current rate:</h4>
                  {displayResultHandler()}
              </div>
          </div>
      );
        }};