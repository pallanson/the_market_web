import React, {useState, useEffect, memo} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Actions from '../../actions'
import { makeSelectIsAuthed, makeSelectError, makeSelectPaymentMethods } from '../../selectors'
import { createStructuredSelector } from 'reselect'
import AccountSidebar from '../../components/AccountSidebar'
import PaymentForm from "../../components/PaymentForm";
import {connect} from "react-redux";
import {compose} from "redux";

export const PaymentsPage = ({paymentMethods, getPaymentMethods, addPayment, location}) => {
    const [fetched, setFetched] = useState(false)
    useEffect(() => {
        if (!fetched) {
            getPaymentMethods()
            setFetched(true)
        }
    }, [fetched, getPaymentMethods, setFetched])
    return (
        <div className="container row" align="center">
            <AccountSidebar/>
            <div className="col-8">
                {paymentMethods.length > 0 ? paymentMethods.map((method, key) => {
                    const { nameOnCard, cardNumber, expiryDate} = method
                    return (
                        <div className="input-group-prepend" key={key}>
                            <p className="m-3">{ nameOnCard } - {cardNumber.substring(cardNumber.length - 4, cardNumber.length)} - ({expiryDate})</p>
                        </div>
                    )
                }) : <p>No payment methods on file</p>}
                <PaymentForm addPayment={addPayment} />
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    authed: makeSelectIsAuthed(),
    error: makeSelectError(),
    paymentMethods: makeSelectPaymentMethods()
})
const mapDispatchToProps = (dispatch) => {
    return {
        addPayment: (evt, nameOnCard, cardNumber, expiryDate) => {
            evt && evt.preventDefault()
            dispatch(Actions.addPaymentOption(nameOnCard, cardNumber, expiryDate))
        },
        getPaymentMethods: () => dispatch(Actions.getPaymentOptions())
    }
}
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(PaymentsPage);