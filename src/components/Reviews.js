import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Modal from 'react-awesome-modal';
import {Link} from "react-router-dom";

const reviews = [
    {
        id: 1,
        title: "This thing sucks!",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore,\n" +
            "                    similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat\n" +
            "                    laborum. Sequi mollitia, necessitatibus quae sint natus.",
        rating: "1.5",
        userName: "Martin Huynh"
    },
    {
        id: 2,
        title: "I love this thing!",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore,\n" +
            "                    similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat\n" +
            "                    laborum. Sequi mollitia, necessitatibus quae sint natus.",
        rating: "5",
        userName: "Fernando Valarino"
    },
    {
        id: 3,
        title: "Meh",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore,\n" +
            "                    similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat\n" +
            "                    laborum. Sequi mollitia, necessitatibus quae sint natus.",
        rating: "2.5",
        userName: "Philip Allanson"
    },
];

// Import Reviews to Cards
function ReviewList(props) {
    const reviews = props.reviews;
    const listReviews = reviews.map((review) => (
            <div className="card-body">
                <h3>{review.title}</h3>
                <small className="text-muted">Posted by {review.userName} on 3/1/17</small>
                <strong className="float-right">{review.rating} / 5</strong>
                <p>{review.text}</p>
            </div>
        )
    );
    return (
        <ul>{listReviews}</ul>
    )
}

export default class Reviews extends React.Component {
    state = {
        title: '',
        text: '',
        rating: '',
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
        const { addReview } = this.props
        const { title, text, rating } = this.state
        return (
            <div className="container">
                <div className="card card-outline-secondary my-4">
                    <div className="card-header">
                        Product Reviews
                    </div>
                    <div className="card-body">
                        <ReviewList reviews={reviews}/>
                    </div>
                </div>

                <div className="card card-outline-secondary my-4 px-5 py-3">
                    <form onSubmit={evt => addReview(evt, title, text, rating )}>
                        <h1 className="mb-3">Add Review</h1>
                        <div className="form-group row">
                            <label htmlFor="title" className="col-md-2 col-form-label text-md-right">Title</label>
                            <div className="col-md-10">
                                <input onChange={this.handleInputChange} type="text" id="title" className="form-control" name="title" required autoFocus/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="text" className="col-md-2 col-form-label text-md-right">Review Text</label>
                            <div className="col-md-10">
                                <input onChange={this.handleInputChange} type="text" id="text" className="form-control reviewText" name="text" required/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="rating" className="col-md-2 col-form-label text-md-right">Rating</label>
                            <div className="col-md-10">
                                <input onChange={this.handleInputChange} type="text" id="rating" className="form-control" name="rating" required/>
                            </div>
                        </div>
                        <div className="col-md-8 offset-md-4">
                            <button type="submit" className="btn btn-primary float-right">Add</button>
                        </div>
                    </form>
                </div>
                <br/>
            </div>
        )
    }
};