import { Redirect } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';

export default (props) => {
    const isAuthed = false

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