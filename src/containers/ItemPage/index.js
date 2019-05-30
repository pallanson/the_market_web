import React, { useEffect, useState, memo } from 'react'
import Actions from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { ratingStr } from '../../components/Item'
import Reviews from '../../components/Reviews';
import {Link} from "react-router-dom";
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { 
    makeSelectCurrentItem,
    makeSelectError,
    makeSelectIsAuthed,
    makeSelectCurrentReviews,
    makeSelectUsers
} from '../../selectors';
import Categories from "../../components/Categories"

export const ItemPage = ({ 
    item = {},
    match,
    setItem,
    getUser,
    reviews = [],
    getReviews,
    error,
    addReview,
    authed,
    addToCart,
    users
}) => {
    const {
        name,
        imageUrl,
        price,
        description,
        rating
    } = item
    const { itemId } = match.params
    const [fetched, setFetched] = useState(null)
    useEffect(() => {
        if (fetched !== itemId) {
            setItem(parseInt(itemId))
            setFetched(itemId)
            getReviews(itemId)
        }
    }, [fetched, setFetched, getReviews, setItem, itemId])
    return (
        <div className="container mb-xl-5">
            <Categories/>
            <div className="col-lg-9 mr-auto ml-auto">
                <div className="card mt-4">
                    <img className="card-img-top img-fluid" src={imageUrl} alt=""/>
                    <div className="card-body">
                        <h3 className="card-title">{ name }</h3>
                        <h4>${price}</h4>
                        <p className="card-text">{ description }</p>
                        <Link to="/cart">
                            <button className="btn_add" onClick={addToCart}>Add to Cart</button>
                        </Link>
                        <span className="text-warning">{ratingStr(rating)}</span>
                        {rating} stars
                    </div>
                </div>
                <Reviews 
                    reviews={reviews}
                    error={error}
                    users={users}
                    authed={authed}
                    getUser={getUser}
                    addReview={(evt, title, text, rating) => {
                        evt && evt.preventDefault();
                        addReview(itemId, title, text, rating)
                    }}
                />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    item: makeSelectCurrentItem(),
    reviews: makeSelectCurrentReviews(),
    error: makeSelectError(),
    authed: makeSelectIsAuthed(),
    users: makeSelectUsers()
})

const mapDispatchToProps = (dispatch) => {
    return {
        setItem: (itemId) => dispatch(Actions.setCurrentItem(itemId)),
        getUser: (userId) => dispatch(Actions.fetchUser(userId)),
        getReviews: (itemId) => dispatch(Actions.getReviews(itemId)),
        addReview: (itemId, title, text, rating) => {
            dispatch(Actions.postReview(itemId, title, text, rating))
        },
        addToCart: () => {}
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(ItemPage);