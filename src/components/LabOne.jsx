import { useEffect, useState } from "react";

export const LabOne = () => {

   //states/var

   return <div>
    <p>Bitcoin rates</p>
<BitcoinRates />
   </div>
      };

      const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
      const BitcoinRates = () => {
          const [currency, setCurrency] = useState(currencies[0]);
          const [rate, setRate] = useState(0);
   
          useEffect(() => {
           try {
               fetch(
                   `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
               )
               .then((response) => response.json())
               .then((data) => {
                   setRate(data.bitcoin[currency.toLowerCase]);
               });
           } catch {
               console.log("error fetching data", currency);
           }
       }, [currency]);
   
       const options = currencies.map((curr) => (
           <option value={curr} key={curr}>
           {curr}
           </option>
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
                   <p>
                    1 Bitcoin is equal to {rate} {currency}
                   </p>
               </div>
           </div>
       );
         }