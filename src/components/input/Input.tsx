import React, {ChangeEvent, useState} from "react";
import s from './input.module.css';


type PropsType = {
    value: number
    text: string
    callback: (value: number) => void
    error: boolean
    valueStart: number
    valueMax: number
    showValueOnScreen: (value: number | string) => void
    checkError: (value: boolean) => void
};

export const Input = (props: PropsType) => {

    const [error, setError] = useState(false);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (+e.currentTarget.value >= 0) {
            props.showValueOnScreen('Enter value');
            props.callback(+e.currentTarget.value);
            setError(false);
            props.checkError(false);
        } else {
            props.showValueOnScreen('Incorrect');
            props.callback(-1)
            setError(true);
            props.checkError(true);
        }

        if (+e.currentTarget.value === props.valueMax) {
            setError(true);
            props.checkError(true);
            props.showValueOnScreen('Incorrect');
        }
    };

    if (props.valueStart > props.valueMax) {
        props.checkError(true);
        props.showValueOnScreen('Incorrect')
    }

    return (
        <div className={s.inputBox}>
            <label className={s.label}>{props.text}</label>
            <input value={props.value} className={props.error || error ? s.error : s.input} onChange={onChangeHandler}
                   type="number"/>
        </div>
    )
};