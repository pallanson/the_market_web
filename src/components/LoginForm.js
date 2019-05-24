import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

export default class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const { login } = this.props
        const { email, password } = this.state
        return (<div className="container">
            <form onSubmit={evt => login(evt, email, password)}>
                <div className="form-group row">
                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail</label>
                    <div className="col-md-6">
                        <input onChange={this.handleInputChange} type="text" id="email" className="form-control" name="email" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                    <div className="col-md-6">
                        <input onChange={this.handleInputChange} type="password" id="password" className="form-control" name="password" required/>
                    </div>
                </div>
                <div className="col-md-8 offset-md-4">
                    <button type="submit" className="btn btn-primary">Login</button>
                    <Link to="/register" className="btn btn-link"> Create new account </Link>
                </div>
            </form>
        </div>)
    }
}