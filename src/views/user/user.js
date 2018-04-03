import React, { Component } from 'react';
import SSNavBar from '../components/SSNavBar';

class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '我的'
        }
    }

    render() {
        return (
            <div className="UserPage">
                <SSNavBar history={this.props.history} title="我的" />

            </div>
        );
    }
}

export default UserPage;