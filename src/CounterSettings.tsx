import React, {useEffect} from "react";
import s from './counterSettings.module.css';
import {Input} from "./components/input/Input";
import {Button} from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType, store} from "./redux/store";
import {
    defaultValueAC,
    InitialStateType,
    maxValueReducerAC,
    screenNumberReducerAC,
    startValueReducerAC
} from "./redux/values-reducer";

type PropsType = {}

export const CounterSettings = (props: PropsType) => {

    let {startValue, maxValue, ...rest} = useSelector<AppRootStateType, InitialStateType>(state => state.counter);


    // let preloadedValues;
    //
    // const persistedToString = localStorage.getItem('counter');
    //
    // if (persistedToString) {
    //     preloadedValues = JSON.parse(persistedToString);
    // }
    //
    // store.subscribe(()=>{
    //     const startValue = store.getState().counter.startValue;
    //     const maxValue = store.getState().counter.maxValue;
    //
    //     const counter = {
    //         start: startValue,
    //         max: maxValue,
    //     };
    //
    //     localStorage.setItem('counter', JSON.stringify(counter));
    // });


    const dispatch = useDispatch();


    const onClickHandler = () => {
        dispatch(defaultValueAC(false));
        dispatch(screenNumberReducerAC(startValue));


    };

    useEffect(() => {
        let counterAsString = localStorage.getItem('counter');
        if (counterAsString) {
            let newValues = JSON.parse(counterAsString);
            dispatch(startValueReducerAC(newValues.startValue));
            dispatch(maxValueReducerAC(newValues.maxValue));
        }
    }, [])


    useEffect(() => {

        const counter = {
            startValue,
            maxValue,
        };

        localStorage.setItem('counter', JSON.stringify(counter));

    }, [startValue, maxValue]);

    const startValueHandler = (value: number) => {
        dispatch(startValueReducerAC(value))
    }

    const maxValueHandler = (value: number) => {
        dispatch(maxValueReducerAC(value))
    }

    return (
        <div className={s.counterSettingsBox}>
            <div className={s.wrapper}>

                <div className={s.inputContainer}>
                    <Input
                        text={'max value'}
                        value={maxValue}
                        callback={maxValueHandler}
                    />

                    <Input
                        text={'start value'}
                        value={startValue}
                        callback={startValueHandler}
                    />

                </div>
                <div className={s.boxBtn}>
                    <Button title={'set'}
                            callback={onClickHandler}
                            disabled={startValue < 0 || maxValue <= startValue}
                    />
                </div>

            </div>
        </div>
    )
};