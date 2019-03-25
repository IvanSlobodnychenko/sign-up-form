import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Main = () => {
    return (
     <div>
         <ul>
             <li><Link to='/sign-up/1'>Sign Up</Link></li>
             <li><Link to='/dashboard'>Dashboard</Link></li>
         </ul>
         <div>
             {/*<Router>*/}
                 {/*<Route path='/dashboard' exact render={() => {*/}
                     {/*return <p>Dashboard</p>*/}
                 {/*}}/>*/}
             {/*</Router>*/}
         </div>
     </div>
    )
};

export default Main;