import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {Main, SignUp, Dashboard} from './pages';


export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact component={Main}/>
                <Route path='/sign-up' exact component={SignUp}/>
                <Route path='/dashboard' exact component={Dashboard}/>

                <Route render={() => <h2>Page not found!</h2>}/>
            </Switch>
        )
    }
}
