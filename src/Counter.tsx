import React from "react";
import s from './counter.module.css';
import {Button} from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {screenNumberReducerAC} from "./redux/screenNumber-reducer";

type propsType = {
}

export const Counter = (props: propsType) => {

    let startValue = useSelector<AppRootStateType, number>(state => state.startValue);
    let maxValue = useSelector<AppRootStateType, number>(state => state.maxValue);
    let screenNumber = useSelector<AppRootStateType, number>(state => state.screenNumber);
    let isDefaultValue = useSelector<AppRootStateType, boolean>(state => state.defaultValue);
    let error = useSelector<AppRootStateType, boolean>(state => state.error);



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
                            : isDefaultValue

                                ? 'Enter value'
                                : screenNumber}

                </div>
                <div className={s.btn__box}>

                    <Button
                        disabled={startValue > maxValue || error || screenNumber === maxValue || isDefaultValue}
                        callback={increaseNumberHandler}
                        title='inc'/>
                    <Button
                        disabled={startValue > maxValue || error || screenNumber === startValue || isDefaultValue}
                        callback={resetNumberHandler}
                        title='reset'/>
                </div>
            </div>
        </div>
    )
}