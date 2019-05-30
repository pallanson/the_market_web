import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Link} from 'react-router-dom';

export default class AddAddressForm extends React.Component {
    state = {
        name: '',
        addressLineOne: '',
        addressLineTwo: '',
        city: '',
        country: '',
        postcode: '',
        userId: '',
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
        const {addAddress} = this.props
        const {name, addressLineOne, addressLineTwo, city, country, postcode, userId} = this.state
        return (
            <div className="container">
                <div className="register-form">
                    <form onSubmit={evt => addAddress(evt, name, addressLineOne, addressLineTwo, city, country, postcode, userId)}>
                        <h1>Add New Address</h1>
                        <div className="form-group row">
                            <label htmlFor="name" className="col-md-3 col-form-label text-md-right">Name</label>
                            <div className="col-md-8">
                                <input onChange={this.handleInputChange} type="text" id="name" className="form-control"
                                       name="name" required autoFocus/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="addressLineOne" className="col-md-3 col-form-label text-md-right">Address Line One</label>
                            <div className="col-md-8">
                                <input onChange={this.handleInputChange} type="text" id="addressLineOne"
                                       className="form-control"
                                       name="addressLineOne" required autoFocus/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="addressLineTwo" className="col-md-3 col-form-label text-md-right">Address Line Two</label>
                            <div className="col-md-8">
                                <input onChange={this.handleInputChange} type="text" id="addressLineTwo"
                                       className="form-control"
                                       name="addressLineTwo" required autoFocus/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="city" className="col-md-3 col-form-label text-md-right">City</label>
                            <div className="col-md-8">
                                <input onChange={this.handleInputChange} type="text" id="city"
                                       className="form-control" name="city" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="country" className="col-md-3 col-form-label text-md-right">Country</label>
                            <div className="col-md-8">
                                <input onChange={this.handleInputChange} type="text" id="country"
                                       className="form-control" name="country" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="postcode" className="col-md-3 col-form-label text-md-right">Postcode</label>
                            <div className="col-md-8">
                                <input onChange={this.handleInputChange} type="text" id="postcode"
                                       className="form-control" name="postcode" required/>
                            </div>
                        </div>
                        <div className="col-md-10 offset-md-2">
                            <button type="submit" className="btn btn-primary">Add New Address</button>
                        </div>
                    </form>
                </div>
            </div>)
    }
}