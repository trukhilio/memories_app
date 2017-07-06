import React, { PropTypes, Component } from 'react';

import Button from './button';

export default class User extends Component {
    render(){
        const { content, error } = this.props;
        let template;
        if (content){
            template =
                <div>
                    <p>
                        Welcome, {content.username}!
                    </p>
                    <img src={content.avatar} />
                    <Button title="Say goodbye!" onClick={this.props.handleLogout}/>
                </div>
        } else {
            template =
                <div>
                    <p>
                        Hello, stranger! Welcome to memories app, press Login button for enter the app. App is using facebook account.
                    </p>
                    <Button title="Login" onClick={this.props.handleLogin}/>
                </div>
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
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};
