import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";

function App() {
    const startNumber:number = 0;
    const maxNumber:number = 5;

    let [number, setNumber] = useState<number>(startNumber);

    let nextNumber = number;

    const increaseNumber = () => {
        if (number === maxNumber) {
            setNumber(maxNumber)
        } else {
            number = number + 1;
            setNumber(number);
        }
    }

    const resetNumber = () => {
        if(number > startNumber){
            setNumber(0);
        }
    }

    return (
        <div className='app'>
            <Counter
                nextNumber={nextNumber}
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
            />
        </div>
    );
}

export default App;