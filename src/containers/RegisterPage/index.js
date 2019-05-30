import { Redirect } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import auth from '../../utils/auth';
import RegisterForm from "../../components/RegisterForm";

export default (props) => {
    const isAuthed = auth.getToken() != null

    return !isAuthed ? (
        <div className="container" align="center">
            <RegisterForm register={props} />
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