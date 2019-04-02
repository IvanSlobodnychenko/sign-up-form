import React, {Component} from 'react';

import SignUpFormFirstStep from './SignUpFirstStep';
import SignUpFormSecondStep from './SignUpSecondStep';
import SignUpFinalStep from './SignUpFinalStep';
import './style.scss';


class SignUp extends Component {
    state = {
        step: 1
    };

    prevStep = () => {
        this.setState(({step}) => {
            return {
                step: step - 1
            }
        });
    };

    nextStep = (values) => {
        // window.alert(JSON.stringify(values, null, 4));

        this.setState(({step}) => {
            return {
                step: step + 1
            }
        });
    };

    toDashboard = () => {
        this.props.history.push('/dashboard');
    };

    render() {
        const {step} = this.state;
        return (
            <div className='sign-up'>
                <div className="sign-up__header">
                    <h1 className="sign-up__title">{step === 3 ? 'Thank you!' : 'Sign-up'}</h1>
                    <div className='progress-bar'>
                        <span className='progress-bar__line' style={{width: Math.round(step * 33.3) + '%'}}/>
                    </div>
                </div>

                {
                    step === 1 &&
                    <SignUpFormFirstStep onSubmit={this.nextStep}/>
                }

                {
                    step === 2 &&
                    <SignUpFormSecondStep
                        initialValues={{gender: 'unspecified', how_hear_about_us: null}}
                        prevStep={this.prevStep}
                        onSubmit={this.nextStep}/>
                }

                {
                    step === 3 &&
                    <SignUpFinalStep nextStep={this.toDashboard}/>
                }
            </div>
        )
    }
}

export default SignUp;
