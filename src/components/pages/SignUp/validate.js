const _calculateAge = (birthday) => {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);

    return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const validate = values => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Email is invalid';
    }

    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 6) {
        errors.password = 'Password should be min 6 characters long';
    }

    if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm password is required';
    } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Passwords are not matched'
    }

    if (!values.date_of_birth) {
        errors.date_of_birth = 'Date is required';
    } else if (_calculateAge(new Date(values.date_of_birth + 'Z')) < 18) {
        errors.date_of_birth = 'Age has to be 18 and above';
    }

    return errors;
};

export default validate;
