import React, { PropTypes, Component } from 'react';

export default class User extends Component {
    render(){
        const { name, error } = this.props;
        let template;
        if (name){
            template =
                <div>
                    <p>
                        Welcome, {name}!
                    </p>
                    <button onClick={this.props.handleLogout}>Say goodbye!</button>
                </div>

        } else {
            template = <button onClick={this.props.handleLogin}>Enter</button>
        }
        return (
            <div>
                {template}
                {error ? <p> {error}. <br/> Try again </p> : ''}
            </div>
        )
    }
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};
