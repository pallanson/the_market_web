import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Actions from '../../actions'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { ratingStr } from '../../components/Item'
import { createStructuredSelector } from 'reselect'
import {Link} from "react-router-dom";
import { makeSelectCart, makeSelectCartTotal, makeSelectItems } from '../../selectors';

// Map Items to cards
const ItemList = ({ items, cart, addOneMore, removeFromCart }) => (
    <ul>
    {
        cart.map(({ itemId, quantity }, key) => {
            const { rating, name, price, imageUrl } = items[itemId]
            return (
            <div key={key} className="col-12 row">
                <div className="col-2 text-center">
                    <img className="img-responsive" src={imageUrl} alt="preview" width="120" height="80"></img>
                </div>
                <div className="col-6 text-sm-center">
                    <h4 className="product-name"><strong>{ name }</strong></h4>
                    <h4>
                        <small>{ ratingStr(rating) }</small>
                    </h4>
                </div>
                <div className="col-4 text-sm-center text-md-right row align-items-center">
                    <div className="col-6 text-md-right">
                        <h6><strong>${price}<span className="text-muted"> x </span></strong>{quantity}</h6>
                    </div>
                    <div className="col-3 text-right">
                        <button type="button" className="btn btn-info btn-xs" onClick={() => addOneMore(itemId)}>
                            Add
                        </button>
                    </div>
                    <div className="col-3 text-right">
                        <button type="button" className="btn btn-outline-danger btn-xs" onClick={() => removeFromCart(itemId)}>
                            Remove
                        </button>
                    </div>
                </div>
            </div>
            )
        })
    }
    </ul>
)

const CartPage = ({ items, addOneMore, removeFromCart, cart, cartTotal }) => (
    <div className="col-lg-9 mt-5 float-right">
         <div className="card">
            <div className="card-header">
                <h3>Cart</h3>
            </div>
            {
                cartTotal === 0 ?
                    (
                        <p className="text-center">Your cart is empty!</p>
                    )
                : (
                    <div>
                        <div className="card-body">
                            <ItemList 
                                cart={cart}
                                addOneMore={addOneMore}
                                removeFromCart={removeFromCart}
                                items={items}
                            />
                        </div>
                        <div className="card-footer">
                            <div className="float-right">
                                <div className="d-inline-flex align-items-center">
                                    <p className="mr-5">Total price: ${cartTotal}</p>
                                    <Link to="/checkout"><button className="btn btn-success">Checkout</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    items: makeSelectItems(),
    cart: makeSelectCart(),
    cartTotal: makeSelectCartTotal()
})

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (itemId) => dispatch(Actions.removeFromCart(itemId)),
    addOneMore: (itemId) => dispatch(Actions.addToCart(itemId))
})

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect)(CartPage);