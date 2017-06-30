import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import User from '../components/user';
import Page from '../components/page';
import * as pageActions from '../actions/pageAction';
import * as userActions from '../actions/userAction';

class App extends Component {
    render(){
        const { user, page } = this.props;
        const { getPhotos } = this.props.pageActions;
        const { handleLogin } = this.props.userActions;
        const { handleLogout } = this.props.userActions;
        return(
            <div>
                <User name={user.name} handleLogin={handleLogin} handleLogout={handleLogout} error={user.error}/>
                <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching}/>
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