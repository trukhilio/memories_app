import React, { PropTypes, Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Button from '../button/index';
import Image from '../image/index';
import Slider from '../slider/index';
import s from './styles.scss';

class User extends Component {
    render(){
        const { content, error } = this.props;
        let template;
        if (content){
            template =
                <div className={s.header}>
                    <h1 className={s.appNameWhite}>
                        memories
                    </h1>
                    <hr width="80%"/>
                    <div className={s.headContent}>
                        <div className={s.headBox}>
                            <p className={s.welcome}>
                                Hi, {content.username}!
                            </p>
                            <Image src={content.avatar} />
                        </div>
                        <Button className={s.logout} title="Logout" onClick={this.props.handleLogout}/>
                    </div>
                </div>
        } else {
            template =
                    <div>
                        <div className={s.box}>
                            <Slider/>
                            <h1 className={s.appName}>
                                memories
                            </h1>
                        </div>
                        <div className={s.box}>
                            <p className={s.text}>
                                Hello and welcome to memories app!
                                <br/>
                                Refresh your happy and unforgettable memories with your social media photos!
                            </p>
                            <Button className={s.login} title="Login via Facebook" onClick={this.props.handleLogin}/>
                        </div>
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

export default withStyles(s)(User)

User.propTypes = {
    content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    handleLogin: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired,
    error: PropTypes.string.isRequired
};
