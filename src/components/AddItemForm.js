import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

export default class AddItemForm extends React.Component {
    state = {
        name: '',
        price: '',
        description: '',
        category: '',
        imageurl: ''
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
        const { createItem, vendorId } = this.props
        const { imageurl, name, price, description, category } = this.state
        return (<div className="register-form">
            <form onSubmit={evt => createItem(evt, name, price, description, category, vendorId, imageurl)}>
                <h1>Create Item</h1>
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
                <div className="form-group row">
                    <label htmlFor="imageurl" className="col-md-3 col-form-label text-md-right">Image URL</label>
                    <div className="col-md-8">
                        <input onChange={this.handleInputChange} type="text" id="imageurl" className="form-control" name="imageurl" required/>
                    </div>
                </div>
                <div className="col-md-10 offset-md-2">
                    <button type="submit" className="btn btn-primary">Create Item</button>
                </div>
            </form>
        </div>)
    }
}