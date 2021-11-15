import React from "react";

type PropsType = {
    name: string
}

export const ButtonSet = (props: PropsType) => {

    const onClickHandler = () => {
      
    }

  return(
      <button onClick={onClickHandler}>{props.name}</button>
  )
}