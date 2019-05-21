import React, { useEffect, memo } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Actions from '../../actions'
import { createStructuredSelector } from 'reselect'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import auth from '../../utils/auth';

export const LogoutPage = ({logout}) => {
    useEffect(() => {
        // Load user from local storage, if available
        logout()
    }, []);
    return (
        <Redirect
          to="/"
        />
    )
}

const mapStateToProps = createStructuredSelector({})

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(Actions.logout())
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(LogoutPage);
