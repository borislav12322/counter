import React, {useState} from "react";
import s from './counter.module.css';
import {Button} from "./components/Button";


type propsType = {
    nextNumber: number;
    increaseNumber: () => void
    resetNumber: () => void
}

export const Counter = (props: propsType) => {
    
    const increaseNumberHandler = () => {
        props.increaseNumber()
    }
    const resetNumberHandler = () => {
        props.resetNumber()
    }


    return (
        <div className={s.counter}>
            <div className={s.wrapper}>
                <div className={props.nextNumber < 5 ? s.screen : s.red}>
                    {props.nextNumber}
                </div>
                <div className={s.btn__box}>
                    {/*<button disabled={props.nextNumber === 5} onClick={increaseNumberHandler} className={s.inc}>inc</button>*/}
                    {/*<button disabled={props.nextNumber < 5} onClick={resetNumberHandler} className={s.res}>reset</button>*/}
                    <Button disabled={props.nextNumber === 5} callback={increaseNumberHandler} title='inc' />
                    <Button disabled={props.nextNumber === 0} callback={resetNumberHandler} title='reset' />
                </div>
            </div>
        </div>
    )
}