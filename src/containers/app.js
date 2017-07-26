import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import User from '../components/user/user';
import Page from '../components/page/page';
import * as pageActions from '../actions/pageAction';
import * as userActions from '../actions/userAction';

class App extends Component {
    render(){
        const { user, page } = this.props;
        const { getPhotos, filterPhotos } = this.props.pageActions;
        const { handleLogin, handleLogout } = this.props.userActions;

        let pageComp;
        if (user.content){
            pageComp =
                <Page
                    photos={page.photos}
                    getPhotos={getPhotos}
                    filterPhotos={filterPhotos}
                    buttonArr={page.buttonArr}
                    fetching={page.fetching}
                    error={page.error}
                />
        } else {
            pageComp = ''
        }
        return(
            <div>
                <User
                    content={user.content}
                    handleLogin={handleLogin}
                    handleLogout={handleLogout}
                    error={user.error}
                />
                {pageComp}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user,
        page: state.page
    }
}

function mapDispatchToProps(dispatch){
    return {
        pageActions: bindActionCreators(pageActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)