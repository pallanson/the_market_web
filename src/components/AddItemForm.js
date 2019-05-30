import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

export default class AddItemForm extends React.Component {
    state = {
        name: '',
        price: '',
        description: '',
        category: ''
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
        const { addItem } = this.props
        const { name, price, description, category } = this.state
        return (<div className="register-form">
            <form onSubmit={evt => addItem(evt, name, price, description, category)}>
                <h1>Edit Account Information</h1>
                <div className="form-group row">
                    <label htmlFor="name" className="col-md-3 col-form-label text-md-right">Name</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="name" className="form-control" name="name" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="price" className="col-md-3 col-form-label text-md-right">Price</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="number" id="price" className="form-control" name="price" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="description" className="col-md-3 col-form-label text-md-right">Description</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="description" className="form-control" name="description" required autoFocus/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="category" className="col-md-3 col-form-label text-md-right">Category</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="category" className="form-control" name="category" required/>
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