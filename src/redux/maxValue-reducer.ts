type ActionType = maxValueReducerACType;

const initialState: number = 5;

export const maxValueReducer = (state = initialState, action: ActionType):number => {
    switch (action.type){
        case 'CHANGE-MAX-VALUE':
            let newState = state;
            return newState = action.value;
        default:
            return state
    }
};

type maxValueReducerACType = ReturnType<typeof maxValueReducerAC>;

export const maxValueReducerAC = (value: number) =>{
    return{
        type: 'CHANGE-MAX-VALUE',
        value,
    } as const
};