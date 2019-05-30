import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

export default class AddItemForm extends React.Component {
    state = {
        email: '',
        firstName: '',
        lastName: '',
        password: ''
    };

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { register } = this.props
        const { email, firstName, lastName, password } = this.state
        return (<div className="register-form">
            <form onSubmit={evt => register(evt, email, firstName, lastName, password)}>
                <h1>Edit Account Information</h1>
                <div className="form-group row">
                    <label htmlFor="email" className="col-md-3 col-form-label text-md-right">E-Mail</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="email" className="form-control" name="email" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="firstName" className="col-md-3 col-form-label text-md-right">First Name</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="firstName" className="form-control" name="email" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="lastName" className="col-md-3 col-form-label text-md-right">Last Name</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="lastName" className="form-control" name="email" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-md-3 col-form-label text-md-right">Password</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="password" id="password" className="form-control" name="password" required/>
                    </div>
                </div>
                <div className="col-md-10 offset-md-2">
                    <Link to="/login" className="btn btn-link"> Create Vendor Account </Link>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>)
    }
}