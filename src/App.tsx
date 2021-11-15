import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";

function App() {
    // Стартовое значение
    let [startValue, setStartValue] = useState<number>(0);
    // Максимальное значение
    const [maxValue, setMaxValue] = useState<number>(5);
    // Отображаемое значение
    let [screenNumber, setScreenNumber] = useState<number | string>(startValue);
    const [error, setError] = useState(false);

    // localStorage.setItem('maxValue', JSON.stringify(maxValue));

    useEffect(() => {
        let startValueAsString = localStorage.getItem('startValue');
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString);
            setStartValue(newStartValue);
            setScreenNumber(newStartValue);
        }

        let maxValueAsString = localStorage.getItem('maxValue');
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString);
            setMaxValue(newMaxValue);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
    }, [startValue, maxValue]);


    // Отслеживание изменения стартового значения
    const startValueInputHandler = (value: number) => {
        setStartValue(value);
    };
    // Отслеживание изменения максимального значения
    const maxValueInputHandler = (value: number) => {
        setMaxValue(value);
    };
    // Отображение числа
    const showValueOnScreen = (value: number | string) => {
        setScreenNumber(value)
    };

    const checkError = (value: boolean) => {
        setError(value)
    }
    // Увеличение значения
    const increaseNumber = () => {
        if (screenNumber === maxValue) {
            setScreenNumber(maxValue);
        } else {
            screenNumber = +screenNumber + 1;
            setScreenNumber(+screenNumber);
        }
    };
    // Сброс значения
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
                showValueOnScreen={showValueOnScreen}
                error={error}
                screenNumber={screenNumber}
                checkError={checkError}
            />

            <Counter
                increaseNumber={increaseNumber}
                resetNumber={resetNumber}
                maxValue={maxValue}
                startValue={startValue}
                startValueInputHandler={startValueInputHandler}
                screenNumber={screenNumber}
                showValueOnScreen={showValueOnScreen}
                error={error}
            />

        </div>
    );
};

export default App;