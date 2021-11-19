type ActionType = errorACType;

const initialState: boolean = false;

export const errorReducer = (state = initialState, action: ActionType):boolean => {
    switch (action.type){
        case 'CHANGE-ERROR':
            let newState = state;
            return newState = action.value;
        default:
            return state
    }
};

type errorACType = ReturnType<typeof errorAC>;

export const errorAC = (value: boolean) =>{
    return{
        type: 'CHANGE-ERROR',
        value,
    } as const
};