import { Redirect } from 'react-router-dom'
import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import LoginForm from '../../components/LoginForm'
import Actions from '../../actions'
import { makeSelectIsAuthed, makeSelectError } from '../../selectors'
import { createStructuredSelector } from 'reselect'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

const LoginPage = ({login, error, authed, location}) => {

    return !authed ? (
        <div className="container" align="center">
          <LoginForm login={login} error={ error } />
        </div>
    ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: location },
          }}
        />
    )
}
const mapStateToProps = createStructuredSelector({
  authed: makeSelectIsAuthed(),
  error: makeSelectError()
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: (evt, email, password) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(Actions.login(email, password))
    }
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect, memo)(LoginPage);
