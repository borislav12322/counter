import React from "react";
import s from './counterSettings.module.css';
import {Input} from "./components/input/Input";
import {Button} from "./components/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {defaultValueAC} from "./redux/defaultValue-reducer";
import {screenNumberReducerAC} from "./redux/screenNumber-reducer";
import {startValueReducerAC} from "./redux/startValue-reducer";
import {maxValueReducerAC} from "./redux/maxValue-reducer";

type PropsType = {

}

export const CounterSettings = (props: PropsType) => {

    let startValue = useSelector<AppRootStateType, number>(state => state.startValue);
    let maxValue = useSelector<AppRootStateType, number>(state => state.maxValue);
    const dispatch = useDispatch();

    const onClickHandler = () => {
        dispatch(defaultValueAC(false));
        dispatch(screenNumberReducerAC(startValue));
    };

    const startValueHandler = (value: number) =>{
        dispatch(startValueReducerAC(value))
    }

    const maxValueHandler = (value: number) =>{
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