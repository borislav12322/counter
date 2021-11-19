type ActionType = screenNumberReducerACType;

const initialState: number = 0;

export const screenNumberReducer = (state = initialState, action: ActionType):number => {
    switch (action.type){
        case 'CHANGE-SCREEN-NUMBER':
            let newState = state;
            return newState = action.value;
        default:
            return state
    }
};

type screenNumberReducerACType = ReturnType<typeof screenNumberReducerAC>;

export const screenNumberReducerAC = (value: number) =>{
    return{
        type: 'CHANGE-SCREEN-NUMBER',
        value,
    } as const
};