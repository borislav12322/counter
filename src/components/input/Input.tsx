import React, {ChangeEvent, useEffect} from "react";
import s from './input.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/store";
import {defaultValueAC, errorAC, InitialStateType} from "../../redux/values-reducer";

type PropsType = {
    value: number
    text: string
    callback: (value: number) => void
};

export const Input = (props: PropsType) => {

    let {startValue, maxValue, error} = useSelector<AppRootStateType, InitialStateType>(state => state.counter);
    const dispatch = useDispatch();

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {

        let value = e.currentTarget.valueAsNumber
        if (value >= 0) {
            props.callback(value);
            dispatch(errorAC(false));
        } else {
            props.callback(-1)
            dispatch(errorAC(true));
        }
    };

    useEffect(() => {
        dispatch(defaultValueAC(true));

        if (maxValue <= startValue || startValue === -1) {
            dispatch(errorAC(true));
        } else {
            dispatch(errorAC(false));
        }

    }, [maxValue, startValue, dispatch]);

    return (
        <div className={s.inputBox}>
            <label className={s.label}>{props.text}</label>
            <input value={props.value} className={error ? s.error : s.input} onChange={onChangeHandler}
                   type="number"/>
        </div>
    )
};