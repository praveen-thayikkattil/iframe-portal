import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';

class Main extends Component {
    render() {
        return (
            <main id="main" className={`${this.props.mainNavOpen ? 'sidebar-active' : ''}`}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/sign-in" component={SignIn} /> */}
                    {/* <Route exact path="/sign-up" component={SignUp} /> */}
                </Switch>
            </main>
        );
    }
}

export default Main;