import React from "react";
import s from './counter.module.css';
import {Button} from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {InitialStateType, screenNumberReducerAC} from "./redux/values-reducer";

type PropsType = {

}

export const Counter = (props: PropsType) => {

    let {startValue, maxValue,screenNumber,defaultValue, error} = useSelector<AppRootStateType, InitialStateType>(state => state.counter);
    const dispatch = useDispatch();

    const increaseNumberHandler = () => {
        if (screenNumber === maxValue) {
            dispatch(screenNumberReducerAC(maxValue));
        } else {
            screenNumber = screenNumber + 1;
            dispatch(screenNumberReducerAC(screenNumber));
        }
    }

    const resetNumberHandler = () => {
        if (screenNumber > startValue) {
            dispatch(screenNumberReducerAC(startValue));
        }
    }

    return (
        <div className={s.counter}>
            <div className={s.wrapper}>
                <div
                    className={error || screenNumber === maxValue || startValue < 0 ? s.error : s.screen}>
                    {
                        error
                            ? 'Incorrect'
                            : defaultValue

                                ? 'Enter value'
                                : screenNumber}

                </div>
                <div className={s.btn__box}>

                    <Button
                        disabled={startValue > maxValue || error || screenNumber === maxValue || defaultValue}
                        callback={increaseNumberHandler}
                        title='inc'/>
                    <Button
                        disabled={startValue > maxValue || error || screenNumber === startValue || defaultValue}
                        callback={resetNumberHandler}
                        title='reset'/>
                </div>
            </div>
        </div>
    )
}