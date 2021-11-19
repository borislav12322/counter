import {applyMiddleware, combineReducers, createStore} from "redux";
import {startValueReducer} from "./startValue-reducer";
import {maxValueReducer} from "./maxValue-reducer";
import {screenNumberReducer} from "./screenNumber-reducer";
import {defaultValueReducer} from "./defaultValue-reducer";
import {errorReducer} from "./error-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    startValue: startValueReducer,
    maxValue: maxValueReducer,
    screenNumber: screenNumberReducer,
    defaultValue: defaultValueReducer,
    error: errorReducer,
});



let preloadedValues;

const persistedToString = localStorage.getItem('counter');
if(persistedToString){
    preloadedValues = JSON.parse(persistedToString);
    console.log(preloadedValues)
}

export const store = createStore(rootReducer, preloadedValues, applyMiddleware(thunk));

store.subscribe(()=>{

    const startValue = store.getState().startValue;
    const maxValue = store.getState().maxValue;

    const counter = {
        startValue,
        maxValue
    };

    localStorage.setItem('counter', JSON.stringify(counter));
})

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;