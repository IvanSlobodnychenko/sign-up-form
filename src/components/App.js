import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {StepOne, StepTwo, Final} from './SignUp';
import Main from './Main';

export default class App extends Component {
    isLogged = false;

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Main}/>

                        <Route path='/sign-up/step1' exact component={StepOne}/>
                        <Route path='/sign-up/step2' exact component={StepTwo}/>
                        <Route path='/sign-up/final' exact component={Final}/>

                        <Route path='/sign-up' exact render={() => {
                            return <Redirect to='/sign-up/step1'/>
                        }}/>

                        <Route path='/dashboard' exact render={() => {
                            return <p>Dashboard</p>
                        }}/>

                        <Route render={() => <h2>Page not found!</h2>}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}
