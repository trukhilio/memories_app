import React, { PropTypes, Component } from 'react';

import Button from '../button/index';
import Image from '../image/index';
import Slider from '../slider/index';
import s from './styles.scss';

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
                    <Image src={content.avatar} />
                    <Button title="Say goodbye!" onClick={this.props.handleLogout}/>
                </div>
        } else {
            template =
                <div>
                    <Slider/>
                    <h2 className={s.user__appName}>
                        memories
                    </h2>
                    <p>
                        Hello my friend! Welcome to memories app, press Login button for enter the app. App is using facebook account.
                    </p>
                    <Button title="Login via Facebook" onClick={this.props.handleLogin}/>
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
