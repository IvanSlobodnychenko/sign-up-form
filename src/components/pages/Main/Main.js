import React from 'react';
import {Link} from 'react-router-dom';

const Main = () => {
    return (
        <ul>
            <li><Link to='/sign-up'>Sign Up</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
        </ul>
    )
};

export default Main;
