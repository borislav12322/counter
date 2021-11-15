import React, {useState} from "react";
import s from './counterSettings.module.css';
import {Input} from "./components/input/Input";

type PropsType = {
    valueStart: number
    valueMax: number
    startValueHandler: (value: number) => void
    maxValueHandler:(value: number) => void
    showValueOnScreen: (value: number | string) => void
    error: boolean
    screenNumber: number | string
    checkError: (value: boolean) =>void
}

export const CounterSettings = (props: PropsType) => {
    
    const onClickHandler = () => {
        props.showValueOnScreen(props.valueStart);
    };
    
    return (
        <div className={s.counterSettingsBox}>
            <div className={s.wrapper}>
                <div className={s.inputContainer}>
                    <Input checkError={props.checkError} showValueOnScreen={props.showValueOnScreen} error={props.error} text={'max value'} value={props.valueMax} callback={props.maxValueHandler} valueStart={props.valueStart} valueMax={props.valueMax}/>
                    <Input checkError={props.checkError} showValueOnScreen={props.showValueOnScreen} error={props.error} text={'start value'} value={props.valueStart} callback={props.startValueHandler} valueStart={props.valueStart} valueMax={props.valueMax}/>
                </div>
                <div className={s.boxBtn}>
                    <button disabled={props.valueStart >= props.valueMax} onClick={onClickHandler}>set</button>
                </div>
            </div>
        </div>
    )
};