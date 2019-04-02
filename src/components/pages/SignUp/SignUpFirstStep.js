import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {InputField} from './Fields';
import validate from './validate';


class SignUpFirstStep extends Component {
    render() {
        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit} className='form'>
                <div className="form__body">
                    <Field
                        name='email'
                        component={InputField}
                        type='text'
                        label='Email'/>

                    <Field
                        name='password'
                        component={InputField}
                        type='password'
                        label='Password'/>

                    <Field
                        name='confirmPassword'
                        component={InputField}
                        type='password'
                        label='Confirm password'/>
                </div>

                <div className="form__footer">
                    <button type='submit' className='btn btn-text-primary btn-arrow-next align-right'>Next</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signUpFirstForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SignUpFirstStep);
