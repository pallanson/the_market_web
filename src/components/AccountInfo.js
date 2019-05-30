import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default class AccountInfo extends React.Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    }

    render() {
        const {deleteUser} = this.props
        const {email, firstName, lastName, password} = this.state
        return (
            <div className="container">
                <div className="register-form">
                    <form onSubmit={evt => deleteUser(evt, email, firstName, lastName, password)}>
                        <h1>Account Information</h1>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-md-3 col-form-label text-md-right">E-Mail</label>
                            <div className="col-md-8">
                                <p>Email</p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="firstName" className="col-md-3 col-form-label text-md-right">First
                                Name</label>
                            <div className="col-md-8">
                                <p>First Name</p>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="lastName" className="col-md-3 col-form-label text-md-right">Last
                                Name</label>
                            <div className="col-md-8">
                                <p>Last Name</p>
                            </div>
                        </div>
                        <div className="col-md-10 offset-md-2">
                            <button type="submit" className="btn btn-primary">Delete Account</button>
                        </div>
                    </form>
                </div>
            </div>)
    }
}