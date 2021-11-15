import React, {FormEvent, useState} from "react";
import s from './counter.module.css';
import {Button} from "./components/Button";

type propsType = {
    increaseNumber: () => void
    resetNumber: () => void
    maxValue: number
    startValue: number
    startValueInputHandler: (value: number) => void
    screenNumber: number | string
    showValueOnScreen: (value: number | string) => void
    error: boolean
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
                <div className={props.error || props.screenNumber === props.maxValue || props.startValue < 0 ? s.error : s.screen}>
                    {props.screenNumber}
                </div>
                <div className={s.btn__box}>

                    <Button disabled={props.startValue > props.maxValue || props.error || props.screenNumber === props.maxValue} callback={increaseNumberHandler}
                            title='inc'/>
                    <Button disabled={props.startValue > props.maxValue || props.error || props.screenNumber === props.startValue} callback={resetNumberHandler}
                            title='reset'/>
                </div>
            </div>
        </div>
    )
}