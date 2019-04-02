import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import {InputField, SelectField} from './Fields';
import validate from './validate';


const testOptions = ['Referred by a friends', 'Found on internet'];

const GenderRadioGroup = ({meta: {error, touched}}) => {
    const labelClass = error && touched ? 'invalid' : '';
    const label = error && touched ? error : 'Gender';

    return (
        <div className='form__field-group'>
            <label className={`form__label text-center ${labelClass}`}>
                {label.toUpperCase()}
            </label>
            <div>
                <label className='radio'>
                    <Field name="gender" component="input" type="radio" value="male" className='radio__input'/>
                    <span className='radio__label'>Male</span>
                </label>

                <label className='radio'>
                    <Field name="gender" component="input" type="radio" value="female" className='radio__input'/>
                    <span className='radio__label'>Female</span>
                </label>

                <label className='radio'>
                    <Field name="gender" component="input" type="radio" value="unspecified" className='radio__input'/>
                    <span className='radio__label'>Unspecified</span>
                </label>
            </div>
        </div>
    )
};

class SignUpSecondStep extends Component {
    render() {
        const {handleSubmit, prevStep} = this.props;

        return (
            <form onSubmit={handleSubmit} className='form'>
                <div className="form__body">
                    <Field
                        name="date_of_birth"
                        type="date"
                        component={InputField}
                        label="Date of birth"
                        labelClass='form__label text-center'
                    />

                    <Field name="gender" component={GenderRadioGroup}/>

                    <Field
                        name='how_hear_about_us'
                        component={SelectField}
                        label='Where did you hear about us?'
                        labelClass='form__label text-center'
                        options={testOptions}/>
                </div>

                <div className="form__footer">
                    <button type='button' className='btn btn-text-primary btn-arrow-prev align-left' onClick={prevStep}>Back</button>
                    <button type='submit' className='btn btn-text-primary btn-arrow-next align-right'>Next</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({
    form: 'signUpSecondForm',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(SignUpSecondStep);
