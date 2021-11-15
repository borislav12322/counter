import React, {useState} from "react";
import s from './counterSettings.module.css';
import {Input} from "./components/input/Input";
import {ButtonSet} from "./components/ButtonSet";

type PropsType = {
    valueStart: number
    valueMax: number
    startValueHandler: (value: number) => void
    maxValueHandler:(value: number) => void
    nextNumber: number
    showValueOnScreen: (value: number | string) => void
    onChangeInputHandler:(valueMax: number, valueStart: number)=>void
    error: boolean
}

export const CounterSettings = (props: PropsType) => {

    const [error, setError] = useState(false);

    const inputMaxValueHandler = (maxValue: number) => {

    };

    const inputStartValueHandler = () => {

    };

    
    const onClickHandler = () => {
        props.showValueOnScreen(props.valueStart)
    };
    
    return (
        <div className={s.counterSettingsBox}>
            <div className={s.wrapper}>
                <div className={s.inputContainer}>
                    <Input onChangeInputHandler={props.onChangeInputHandler} error={props.error} text={'max value'} value={props.valueMax} callback={props.maxValueHandler} valueStart={props.valueStart} valueMax={props.valueMax}/>
                    <Input onChangeInputHandler={props.onChangeInputHandler} error={props.error} nextNumber={props.nextNumber} text={'start value'} value={props.valueStart} callback={props.startValueHandler} valueStart={props.valueStart} valueMax={props.valueMax}/>
                </div>
                <div className={s.boxBtn}>
                    {/*<Button title={'set'} callback={onClickHandler} disabled={false}/>*/}
                    {/*<ButtonSet name={'set'}/>*/}
                    <button disabled={props.valueStart >= props.valueMax} onClick={onClickHandler}>set</button>
                </div>
            </div>
        </div>
    )
};