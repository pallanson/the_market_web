import { Redirect } from 'react-router-dom'
import React, { useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { makeSelectIsAuthed, makeSelectError } from '../../selectors'
import { createStructuredSelector } from 'reselect'
import Actions from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = ({register, error, authed, location}) => {

    return !authed ? (
        <div className="container" align="center">
            <RegisterForm register={register} error={ error } />
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
    register: (evt, email, firstName, lastName, password) => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(Actions.register(email, firstName, lastName, password))
    }
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect, memo)(RegisterPage);