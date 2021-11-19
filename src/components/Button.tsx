import React from "react";

type propsType = {
    title: string
    callback: () => void
    disabled: boolean
}

export const Button = (props: propsType) => {


    return (
        <div>
            <button onClick={props.callback} disabled={props.disabled}>
                {props.title}
            </button>
        </div>
    )
}