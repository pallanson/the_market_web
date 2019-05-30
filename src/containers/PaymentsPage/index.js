import {Redirect, Route, Switch} from 'react-router-dom'
import React, {memo} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import auth from '../../utils/auth';
import Actions from '../../actions'
import { makeSelectIsAuthed, makeSelectError } from '../../selectors'
import { createStructuredSelector } from 'reselect'
import AccountSidebar from '../../components/AccountSidebar'
import AddPaymentForm from "../../components/AddPaymentForm";
import {connect} from "react-redux";
import {compose} from "redux";

const PaymentsPage = ({addPaymentOption, location}) => {
    const isAuthed = auth.getToken() != null

    return isAuthed ? (
        <div className="container" align="center">
            <AccountSidebar/>
            <AddPaymentForm />
        </div>
    ) : (
        <Redirect
            to={{
                pathname: '/',
                state: {from: location},
            }}
        />
    )
}

const mapStateToProps = createStructuredSelector({
    authed: makeSelectIsAuthed(),
    error: makeSelectError()
})
const mapDispatchToProps = (dispatch) => {
    return {
        addPaymentOption: (evt, nameOnCard, cardNumber, expiryDate) => {
            if (evt !== null && evt.preventDefault) evt.preventDefault();
            dispatch(Actions.addPaymentOption(nameOnCard, cardNumber, expiryDate))
        }
    }
}
const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(PaymentsPage);