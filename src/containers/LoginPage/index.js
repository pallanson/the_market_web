import { Redirect } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import auth from '../../utils/auth';

export default (props) => {
    const isAuthed = auth.getToken() != null

    return !isAuthed ? (
        <div className="container" align="center">
            <h3>Not Found ;(</h3>
        </div>
    ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
    )
}