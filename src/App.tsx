import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";

function App() {
    // const startNumber: number = 0;
    // const maxNumber: number = 5;

    let [startValue, setStartValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    let [screenNumber, setScreenNumber] = useState<number | string>(startValue);
    const [error, setError] = useState(false);
    let nextNumber = startValue;

    const startValueInputHandler = (value: number) => {
        setStartValue(value);
    };

    const maxValueInputHandler = (value: number) => {
        setMaxValue(value);
        // console.log(value);
    };

    const showValueOnScreen = (value: number | string) => {
        if (startValue === maxValue || startValue > maxValue) {
            setScreenNumber('error')
        } else {
            setScreenNumber(value);
        }
    };

    const onChangeInputHandler = (valueMax: number, valueStart: number) => {
        if (valueStart > valueMax || valueStart === valueMax) {
            setScreenNumber('Incorrect');
            setError(true);
        } else if (valueStart < valueMax) {
            setScreenNumber('customize')
        } else if (valueStart < 0) {
            setScreenNumber('error')
        }
    }

    // let [number, setNumber] = useState<number>(startValue);

    const increaseNumber = () => {
        if (screenNumber === maxValue) {
            setScreenNumber(maxValue);
        } else {
            screenNumber = +screenNumber + 1;
            setScreenNumber(+screenNumber);
        }
    };

    const resetNumber = () => {
        if (screenNumber > startValue) {
            setScreenNumber(startValue);
        }
    };

    return (
        <div className='app'>

            <CounterSettings
                valueStart={startValue}
                valueMax={maxValue}
                startValueHandler={startValueInputHandler}
                maxValueHandler={maxValueInputHandler}
                nextNumber={nextNumber}
                showValueOnScreen={showValueOnScreen}
                onChangeInputHandler={onChangeInputHandler}
                error={error}
            />

            <Counter
                nextNumber={nextNumber}
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
                maxValue={maxValue}
                startValue={startValue}
                startValueInputHandler={startValueInputHandler}
                screenNumber={screenNumber}
                showValueOnScreen={showValueOnScreen}
            />

        </div>
    );
};

export default App;