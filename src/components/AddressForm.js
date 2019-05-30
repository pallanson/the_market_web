import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

export default class AddressForm extends React.Component {
    state = {
        name: '',
        addresslineone: '',
        addresslinetwo: '',
        city: '',
        country: '',
        postcode: ''
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
        const { addAddress } = this.props
        const { name, addresslineone, addresslinetwo, city, country, postcode } = this.state
        return (<div className="card container text-white bg-dark">
            <form className="card-body" onSubmit={evt => addAddress(evt, name, addresslineone, addresslinetwo, city, country, postcode)}>
                <div className="form-group row">
                    <label htmlFor="name" className="col-md-3 col-form-label text-md-right">Address Name</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="name" className="form-control" name="name" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="addresslineone" className="col-md-3 col-form-label text-md-right">Address Line One</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="addresslineone" className="form-control" name="addresslineone" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="addresslinetwo" className="col-md-3 col-form-label text-md-right">Address Line Two</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="addresslinetwo" className="form-control" name="addresslinetwo" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="city" className="col-md-3 col-form-label text-md-right">City</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="city" className="form-control" name="city" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="postcode" className="col-md-3 col-form-label text-md-right">Country</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="country" className="form-control" name="country" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="postcode" className="col-md-3 col-form-label text-md-right">Postcode</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="postcode" className="form-control" name="postcode" required/>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add Address</button>
                </div>
            </form>
        </div>)
    }
}