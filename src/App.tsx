import React from 'react';
import './App.css';
import {Counter} from "./Counter";
import {CounterSettings} from "./CounterSettings";


function App() {

    return (
        <div className='app'>

            <CounterSettings/>

            <Counter/>

        </div>
    );
}

export default App;