import React from 'react';
import {connect} from "react-redux";
import ReactJson from 'react-json-view';

let Dashboard = ({userData}) => {
    console.log('props: ', userData);

    return (
        <div>
            Dashboard
            <ReactJson src={userData}/>
        </div>
    )
};


const mapStateToProps = ({form: {signUpFirstForm, signUpSecondForm}}) => {
    let userData = {};

    if (signUpFirstForm && signUpSecondForm) {
        userData = {...signUpFirstForm.values, ...signUpSecondForm.values}
    }

    return {userData}
};

export default connect(mapStateToProps)(Dashboard);
