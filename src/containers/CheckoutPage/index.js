import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { Redirect } from 'react-router-dom'
import Actions from '../../actions'
import AddressForm from '../../components/AddressForm'
import PaymentForm  from '../../components/PaymentForm'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { 
    makeSelectCart, 
    makeSelectCartTotal, 
    makeSelectItems, 
    makeSelectIsAuthed,
    makeSelectCurrentAddress, 
    makeSelectCurrentPaymentMethod,
    makeSelectPaymentMethods,
    makeSelectAddresses 
} from '../../selectors';


const renderItemList = ({ items, cart = [], cartTotal }) => (
    <ul className="list-group list-group-flush">
        {
            cart.map(({ itemId, quantity }, key) => {
                const { name, price } = items[itemId]
                return (
                    <li className="list-group-item" key={key}>
                        { `${ name } x ${ quantity } = $${ price * quantity }` }
                    </li>
                )
            })
        }
        <li className="list-group-item list-group-item-light">Total: ${ cartTotal }</li>
    </ul>
)

const renderPaymentsList = ({ addPayment, paymentMethods, showPayment, setShowPayment, currentPaymentMethod, setCurrentPayment }) => {
    const { paymentId: curId = null } = currentPaymentMethod || {}
    return (
    <div>
        {paymentMethods.length > 0 ? paymentMethods.map((method, key) => {
            const {paymentId, nameOnCard, cardNumber, expiryDate} = method
            return (
                <div className="input-group-prepend" key={key}>
                    <div className="input-group-text">
                        <input type="radio" checked={paymentId === curId} onClick={() => setCurrentPayment(method)}></input>
                    </div>
                    <p className="m-3">{ nameOnCard } - {cardNumber.substring(cardNumber.length - 4, cardNumber.length)} - ({expiryDate})</p>
                </div>
            )
        }) : <p>No payment methods on file</p>}
        {
            showPayment 
                ? (<PaymentForm addPayment={addPayment} />)
                : (<button className="btn btn-info" onClick={() => setShowPayment(true)}>Add Payment Method</button>)
        }
    </div>
)}

const renderAddressList = ({ addAddress, addresses, showAddress, setShowAddress, currentAddress, setCurrentAddress }) => {
    const { addressId: curId = null } = currentAddress || {}
    return (
    <div>
         {addresses.length > 0 ? addresses.map((address, key) => {
            const {
                addressId,
                name,
                addressLineOne,
                addressLineTwo,
                city,
                country,
                postcode
            } = address
            return (
                <div className="input-group-prepend" key={key}>
                    <div className="input-group-text">
                        <input type="radio" checked={addressId === curId} onClick={() => setCurrentAddress(address)}></input>
                    </div>
                    <p className="m-3">{name}: { addressLineOne }, {addressLineTwo}, {city} - {postcode}, {country}</p>
                </div>
            )
        }) : <p>No shipping addresses on file</p>}
        {
            showAddress 
                ? (<AddressForm addAddress={addAddress}/>)
                : (<button className="btn btn-info" onClick={() => setShowAddress(true)}>Add Address</button>)
        }
    </div>
)}

export const CheckoutPage = ({ 
    items,
    cart,
    cartTotal,
    location,
    authed,
    checkout,
    addresses,
    addPayment,
    addAddress,
    getPaymentMethods,
    getAddresses,
    paymentMethods,
    setCurrentPayment,
    setCurrentAddress,
    currentAddress,
    currentPaymentMethod,
}) => {
    const [fetched, setFetched] = useState(false)
    const [showPayment, setShowPayment] = useState(false)
    const [showAddress, setShowAddress] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    useEffect(() => {
        if (!fetched) {
            getPaymentMethods()
            getAddresses()
            setFetched(true)
        }
    }, [fetched, getPaymentMethods, getAddresses, setFetched])

    if (submitted) {
        return (
            <Redirect
                to="/order-complete"
                />
        )
    }
    
    return (
    <div className="container" align="center">
        <div className="col-lg-12">
            <div className="card">
                <div className="card-header">
                    <h3>Checkout</h3>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h5 className="align-left">Your order</h5>
                            { renderItemList({ items, cart, cartTotal }) }
                        </div>
                        <div className="col-md-6 col-sm-12 row">
                            <div className="col-12">
                                <div className="card">
                                    <h5 className="align-left">Payment Method</h5>
                                    { renderPaymentsList({ 
                                        addPayment,
                                        showPayment,
                                        setShowPayment,
                                        paymentMethods,
                                        currentPaymentMethod,
                                        setCurrentPayment 
                                    }) }
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="card">
                                    <h5 className="align-left">Shipping Address</h5>
                                    { renderAddressList({
                                        addAddress,
                                        addresses,
                                        showAddress,
                                        setShowAddress,
                                        currentAddress,
                                        setCurrentAddress 
                                    }) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <button 
                        disabled={ cartTotal === 0 ||  currentAddress === null || currentPaymentMethod === null}
                        className="btn btn-success"
                        onClick={() => {
                            checkout(currentAddress.addressId, currentPaymentMethod.paymentId)
                            setSubmitted(true)
                        }}
                    >Finish Purchase</button>
                </div>
            </div>
        </div>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    items: makeSelectItems(),
    cart: makeSelectCart(),
    cartTotal: makeSelectCartTotal(),
    authed: makeSelectIsAuthed(),
    paymentMethods: makeSelectPaymentMethods(),
    addresses: makeSelectAddresses(),
    currentAddress: makeSelectCurrentAddress(),
    currentPaymentMethod: makeSelectCurrentPaymentMethod()
})

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (itemId) => dispatch(Actions.removeFromCart(itemId)),
    setCurrentPayment: (payment) => dispatch(Actions.setCurrentPaymentMethod(payment)),
    setCurrentAddress: (address) => dispatch(Actions.setCurrentAddress(address)),
    getAddresses: () => dispatch(Actions.getAddresses()),
    getPaymentMethods: () => dispatch(Actions.getPaymentOptions()),
    addOneMore: (itemId) => dispatch(Actions.addToCart(itemId)),
    addAddress: (evt, name, addressLineOne, addressLineTwo, city, country, postcode) => {
        evt && evt.preventDefault()
        dispatch(Actions.addAddress(name, addressLineOne, addressLineTwo, city, country, postcode))
    },
    addPayment: (evt, nameOnCard, cardNumber, expiryDate) => {
        evt && evt.preventDefault()
        dispatch(Actions.addPaymentOption(nameOnCard, cardNumber, expiryDate))
    },
    checkout: (addressId, paymentId) => dispatch(Actions.checkout(addressId, paymentId))
})

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect)(CheckoutPage);