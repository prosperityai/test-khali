import React, {Component} from 'react';
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {Route} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                {/*<Route path="/login" component={Login}/>*/}
                {/*<Route path="/register" component={Register}/>*/}
            </div>
        );
    }
}

export default App;
