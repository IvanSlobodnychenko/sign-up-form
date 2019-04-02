import React, {Component} from 'react';


class InputField extends Component {
    static defaultProps = {
        labelClass: 'form__label'
    };

    render() {
        const {input, meta, type} = this.props;
        const error = (meta.error && meta.touched) ? meta.error : false;

        let labelClass = this.props.labelClass;
        let {label} = this.props;

        labelClass += error ? ' invalid' : '';
        label = error || label;

        return (
            <div className='form__field-group'>
                <label className={labelClass}>{label.toUpperCase()}</label>
                <input {...input} type={type} className='form__input'/>
            </div>
        )
    }
}

class SelectField extends Component {
    static defaultProps = {
        labelClass: 'form__label'
    };

    render() {
        const {input, meta, options} = this.props;
        const error = (meta.error && meta.touched) ? meta.error : false;

        let labelClass = this.props.labelClass;
        let {label} = this.props;

        labelClass += error ? ' invalid' : '';
        label = error || label;

        return (
            <div className='form__field-group'>
                <label className={labelClass}>{label.toUpperCase()}</label>
                <select {...input} className='form__input'>
                    <option/>
                    {
                        options.map(value => {
                            return <option value={value} key={value}>{value}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export {
    InputField,
    SelectField
};
