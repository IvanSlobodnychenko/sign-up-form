import React from 'react';

const Layout = () => {
    // const {prevLink, nextLink} = this.props;
    const {content} = this.props.children;


    return (
        <div>
            <header>Sign Up</header>
            {content}
            <footer>
                <p>Footer</p>
                <ul>
                    {/*<li><Link to=''>Previous</Link></li>*/}
                    {/*<li><Link to={nextLink}>Next</Link></li>*/}
                </ul>
            </footer>
        </div>
    )
};

export default Layout;
