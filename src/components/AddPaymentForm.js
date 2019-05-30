import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import {Link} from 'react-router-dom';

export default class AddPaymentForm extends React.Component {
    state = {
        nameOnCard: '',
        cardNumber: '',
        expiryDate: '',
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
        const {addPaymentOption} = this.props
        const {nameOnCard, cardNumber, expiryDate} = this.state
        return (
            <div className="container">
                <div className="register-form">
                    <form onSubmit={evt => addPaymentOption(evt, nameOnCard, cardNumber, expiryDate)}>
                        <h1>Add Payment Information</h1>
                        <div className="form-group row">
                            <label htmlFor="nameOnCard" className="col-md-3 col-form-label text-md-right">Name on
                                Card</label>
                            <div className="col-md-8">
                                <input onChange={this.handleInputChange} type="text" id="nameOnCard"
                                       className="form-control"
                                       name="nameOnCard" required autoFocus/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="cardNumber" className="col-md-3 col-form-label text-md-right">Card Number
                            </label>
                            <div className="col-md-8">
                                <input onChange={this.handleInputChange} type="text" id="cardNumber"
                                       className="form-control"
                                       name="cardNumber" required autoFocus/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="expiryDate" className="col-md-3 col-form-label text-md-right">Expiration Date
                            </label>
                            <div className="col-md-8">
                                <input onChange={this.handleInputChange} type="text" id="expiryDate"
                                       className="form-control"
                                       name="expiryDate" required autoFocus/>
                            </div>
                        </div>
                        <div className="col-md-10 offset-md-2">
                            <button type="submit" className="btn btn-primary">Add Payment Method</button>
                        </div>
                    </form>
                </div>
            </div>)
    }
}