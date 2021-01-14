import React, {useContext} from 'react';
import AppContext from "../context/appContext";

const Counter = () => {
    const {count, increment, decrement} = useContext(AppContext);

    return (
        <div className="App">
            <h1>Counter: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
}

export default Counter;