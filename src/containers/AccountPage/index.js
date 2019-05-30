import {Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import auth from '../../utils/auth';
import AccountSidebar from '../../components/AccountSidebar'
import AccountInfo from "../../components/AccountInfo"

export default (props) => {
    const isAuthed = auth.getToken() != null

    return isAuthed ? (
        <div className="container" align="center">
            <AccountSidebar/>
            <AccountInfo />
        </div>
    ) : (
        <Redirect
            to={{
                pathname: '/',
                state: {from: props.location},
            }}
        />
    )
}