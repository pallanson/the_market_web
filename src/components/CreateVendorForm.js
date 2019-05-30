import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Link} from 'react-router-dom';

export default class CreateVendorForm extends React.Component {
    state = {
        name: '',
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
        const {createVendor} = this.props
        const {name} = this.state
        return (
            <div className="register-form">
                <form onSubmit={evt => createVendor(evt, name)}>
                    <h1>Create a New Vendor Account</h1>
                    <div className="form-group row">
                        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Shop Name</label>
                        <div className="col-md-7">
                            <input onChange={this.handleInputChange} type="text" id="name" className="form-control"
                                   name="name" required autoFocus/>
                        </div>
                    </div>
                    <div className="col-md-10 offset-md-2">
                    <button type="submit" className="btn btn-primary">Become Vendor</button>
                    </div>
                </form>
            </div>)
    }
}