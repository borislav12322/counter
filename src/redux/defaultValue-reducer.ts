type ActionType = defaultValueACType;

const initialState: boolean = false;

export const defaultValueReducer = (state = initialState, action: ActionType):boolean => {
    switch (action.type){
        case 'CHANGE-DEFAULT-VALUE':
            let newState = state;
            return newState = action.value;
        default:
            return state
    }
};

type defaultValueACType = ReturnType<typeof defaultValueAC>;

export const defaultValueAC = (value: boolean) =>{
    return{
        type: 'CHANGE-DEFAULT-VALUE',
        value,
    } as const
};