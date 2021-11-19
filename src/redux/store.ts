import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./values-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    counter: counterReducer,
});

// let preloadedValues;
//
// const persistedToString = localStorage.getItem('counter');
//
// if(persistedToString){
//     preloadedValues = JSON.parse(persistedToString);
// }

export const store = createStore(rootReducer, applyMiddleware(thunk));

// store.subscribe(()=>{
//     const state = store.getState().counter;
//     const startValue = store.getState().counter.startValue;
//     const maxValue = store.getState().counter.maxValue;
//
//     const counter = {
//         start: startValue,
//         max: maxValue,
//     };
//
//     localStorage.setItem('counter', JSON.stringify(counter));
// });

export type AppRootStateType = ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;