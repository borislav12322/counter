type ActionType = startValueReducerACType;

const initialState: number = 0;

export const startValueReducer = (state = initialState, action: ActionType):number => {
    switch (action.type){
        case 'CHANGE-START-VALUE':
            let newState = state;
            return newState = action.value;
        default:
            return state
    }
  
}

type startValueReducerACType = ReturnType<typeof startValueReducerAC>

export const startValueReducerAC = (value: number) =>{
    return{
        type: 'CHANGE-START-VALUE',
        value,
    }
}



