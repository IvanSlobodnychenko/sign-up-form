import React, {Component} from 'react';
import TextFieldGroup from './common/TextFieldGroup';

class _SignUpForm extends Component {
    state = {
        identifier: '',
        password: '',
        errors: {},
        isLoading: false
    };

    onSubmit = (event) => {
        event.preventDefault();
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const {identifier, password, errors, isLoading} = this.state;
        return (
            <form>
                <h1>Sign Up</h1>

                <TextFieldGroup
                    field='identifier'
                    label='Username / Email'
                    value={identifier}
                    error={errors.identifier}
                    onChange={this.onChange}
                />

                <TextFieldGroup
                    field='password'
                    label='Password'
                    value={password}
                    error={errors.password}
                    onChange={this.onChange}
                    type='password'
                />

                <div>
                    <button disabled={isLoading}>Sign up</button>
                </div>
            </form>
        )
    }
}

export default _SignUpForm;
