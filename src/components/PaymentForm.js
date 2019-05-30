import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

export default class PaymentForm extends React.Component {
    state = {
        nameoncard: '',
        cardnumber: '',
        expirydate: ''
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
        const { addPayment } = this.props
        const { nameoncard, cardnumber, expirydate } = this.state
        return (<div className="card container text-white bg-dark">
            <form className="card-body" onSubmit={evt => addPayment(evt, nameoncard, cardnumber, expirydate)}>
                <div className="form-group row">
                    <label htmlFor="nameoncard" className="col-md-3 col-form-label text-md-right">Name on Card</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="nameoncard" className="form-control" name="nameoncard" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="cardnumber" className="col-md-3 col-form-label text-md-right">Card Number</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="cardnumber" className="form-control" name="cardnumber" required/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="expirydate" className="col-md-3 col-form-label text-md-right">Expiry Date</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="expirydate" className="form-control" name="expirydate" required/>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-primary">Add Payment Method</button>
                </div>
            </form>
        </div>)
    }
}