import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Counter from "./pages/Counter";
import Login from "./pages/Login";
import Home from "./pages/Home";

import AppState from "./context/appState";

const App = () => {
    return (
        <Router>
            <AppState>
                <Switch>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/counter" component={Counter}/>
                    <Route path="/" component={Home}/>
                </Switch>
            </AppState>
        </Router>
    );
}

export default App;
