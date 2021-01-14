import React, {useContext} from 'react';
import {Link} from "react-router-dom";

import AppContext from "../context/appContext";

const Home = () => {
    const {isLoggedIn, setIncrementalOrDecrementalValue, incrementalOrDecrementalValue, count} = useContext(AppContext);

    const handleChange = (event) => {
        setIncrementalOrDecrementalValue(event.target.value);
    }

    return (
        <div className="App">
            <h1>Home</h1>
            <h4>Count value: {count}</h4>
            Increment / Decrement by <input type="number" name="incremental_value" min={0} max={10}
                                            value={incrementalOrDecrementalValue} onChange={handleChange}/>
            <p>**Note: You must login to change the count value.**</p>
            <Link to={isLoggedIn ? "/counter" : "/login"}>{isLoggedIn ? "Start changing" : "Login"}</Link>
        </div>
    );
}

export default Home;