import { Redirect } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import auth from '../../utils/auth';
import EditProfileForm from "../../components/EditProfileForm";

export default (props) => {
    const isAuthed = auth.getToken() != null

    return !isAuthed ? (
        <div className="container" align="center">
            <EditProfileForm register={props} />
        </div>
    ) : (
        <Redirect
            to={{
                pathname: '/account',
                state: { from: props.location },
            }}
        />
    )
}