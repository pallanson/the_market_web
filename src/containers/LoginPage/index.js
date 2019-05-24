import { Redirect } from 'react-router-dom'
import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import LoginForm from '../../components/LoginForm'
import Actions from '../../actions'
import { makeSelectIsAuthed } from '../../selectors'
import { createStructuredSelector } from 'reselect'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

const LoginPage = ({login, authed, location}) => {

    return !authed ? (
        <div className="container" align="center">
          <LoginForm login={login} />
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
})

const mapDispatchToProps = (dispatch) => {
  return {
    login: (evt, email, password) => {
      console.log(evt)
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      console.log(email, password)
      dispatch(Actions.login(email, password))
    }
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect, memo)(LoginPage);
