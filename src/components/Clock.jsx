import { useState, useEffect } from "react";
// renders a digital time that updates every second

export function Clock() {
//state/var
    const [date, setDate] = useState(new Date());

    useEffect(() => {  //first arg is usually an arrow function
//code to run is here

setInterval(() => tick(), 1000);
console.log('Clock component mounted');

    }, []); // second argument is an array of dependencies

    //function
    const tick = () => {
        setDate(new Date());
        console.log("tick"); //track the effect frequency
    };

    //return
    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </div>
    );
}
