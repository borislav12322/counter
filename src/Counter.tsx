import React, {FormEvent, useState} from "react";
import s from './counter.module.css';
import {Button} from "./components/Button";

type propsType = {
    nextNumber: number;
    increaseNumber: () => void
    resetNumber: () => void
    maxValue: number
    startValue: number
    startValueInputHandler: (value: number) => void
    screenNumber: number | string
    showValueOnScreen: (value: number | string) => void
}

export const Counter = (props: propsType) => {

    const [error, setError] = useState<boolean>(false);
    



    const increaseNumberHandler = () => {
        props.increaseNumber()
    }
    const resetNumberHandler = () => {
        props.resetNumber()
    }

    return (
        <div className={s.counter}>
            <div className={s.wrapper}>
                <div className={props.screenNumber === props.maxValue || props.startValue < 0 ? s.red : s.screen}>
                    {/*{props.startValue < 0 || props.startValue > props.maxValue ? 'Incorrect!!!' : props.screenNumber}*/}
                    {props.screenNumber}
                </div>
                <div className={s.btn__box}>
                    {/*<button disabled={props.nextNumber === 5} onClick={increaseNumberHandler} className={s.inc}>inc</button>*/}
                    {/*<button disabled={props.nextNumber < 5} onClick={resetNumberHandler} className={s.res}>reset</button>*/}
                    <Button disabled={props.screenNumber === props.maxValue} callback={increaseNumberHandler}
                            title='inc'/>
                    <Button disabled={props.screenNumber === props.startValue} callback={resetNumberHandler}
                            title='reset'/>
                </div>
            </div>
        </div>
    )
}