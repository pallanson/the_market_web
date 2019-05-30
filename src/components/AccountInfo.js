import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default ({deleteUser, firstName, lastName, email}) => (
    <div className="col-8 card">
        <div className="card-body">
            <h1>Account Information</h1>
            <div className="row">
                <b>First Name: </b>
                <p className="ml-3"> { firstName }</p>
            </div>
            <div className="row">
                <b>Last Name: </b>
                <p className="ml-3"> { lastName }</p>
            </div>
            <div className="row">
                <b>Email: </b>
                <p className="ml-3"> { email }</p>
            </div>
            <button className="btn btn-warning" onClick={deleteUser}>Delete Account</button>
        </div>
    </div>
)