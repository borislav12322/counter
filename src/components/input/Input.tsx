import React, {ChangeEvent, useState} from "react";
import s from './input.module.css';


type PropsType = {
    value: number
    text: string
    callback: (value: number) => void
    nextNumber?: number
    error: boolean
    valueStart: number
    valueMax: number
    onChangeInputHandler:(valueMax: number, valueStart: number)=>void
};

export const Input = (props: PropsType) => {

    const [error, setError] = useState(false);



    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        // setValue(+e.currentTarget.value);
        if(+e.currentTarget.value >= 0){
            props.callback(+e.currentTarget.value);
            setError(false)
        }else{
            props.callback(-1)
            setError(true);
        }

        props.onChangeInputHandler(props.valueMax, props.valueStart);


    };
    
  return(
      <div className={s.inputBox}>
          <label className={s.label}>{props.text}</label>
          <input value={props.value} className={props.error ? s.error : s.input} onChange={onChangeHandler} type="number"/>
      </div>
  )
};