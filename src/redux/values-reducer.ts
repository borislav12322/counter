type ActionType = startValueReducerACType | maxValueReducerACType | screenNumberReducerACType | errorACType | defaultValueACType;

export type InitialStateType = {
    startValue: number
    maxValue: number
    screenNumber: number
    error: boolean
    defaultValue: boolean
}

const initialState: InitialStateType = {
    startValue: 0,
    maxValue: 5,
    screenNumber: 0,
    error: false,
    defaultValue: true,
}

export const counterReducer = (state:InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE-START-VALUE':
            return {...state, startValue: action.valueStart}
        case 'CHANGE-MAX-VALUE':
            return {...state, maxValue: action.value}
        case 'CHANGE-SCREEN-NUMBER':
            return {...state, screenNumber: action.value}
        case 'CHANGE-ERROR':
            return {...state, error: action.valueError}
        case 'CHANGE-DEFAULT-VALUE':
            return {...state, defaultValue: action.defaultValue}
        default:
            return state
    }

}

type startValueReducerACType = ReturnType<typeof startValueReducerAC>

export const startValueReducerAC = (valueStart: number) => {
    return {
        type: 'CHANGE-START-VALUE',
        valueStart,
    } as const
}

type maxValueReducerACType = ReturnType<typeof maxValueReducerAC>;

export const maxValueReducerAC = (value: number) => {
    return {
        type: 'CHANGE-MAX-VALUE',
        value,
    } as const
};

type screenNumberReducerACType = ReturnType<typeof screenNumberReducerAC>;

export const screenNumberReducerAC = (value: number) => {
    return {
        type: 'CHANGE-SCREEN-NUMBER',
        value,
    } as const
};

type errorACType = ReturnType<typeof errorAC>;

export const errorAC = (valueError: boolean) => {
    return {
        type: 'CHANGE-ERROR', valueError: valueError,
    } as const
};

type defaultValueACType = ReturnType<typeof defaultValueAC>;

export const defaultValueAC = (defaultValue: boolean) => {
    return {
        type: 'CHANGE-DEFAULT-VALUE',
        defaultValue,
    } as const
};



