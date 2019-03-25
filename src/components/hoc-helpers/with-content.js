import React, {Component} from 'react';

const withContent = (View, data) => {
    return class extends Component {
        render(){
            return <View/>
        }
    }
};

export default withContent;
