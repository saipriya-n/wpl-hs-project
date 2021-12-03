import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import SignUP from './SignUp';
import Slideshow from './Slideshow';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Slideshow} />
                    <Route path="/SignUp" component={SignUP} />
                </Switch>
            </Router>
        )
    }
}
