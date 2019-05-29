import React, { useEffect, memo } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Switch, Route } from 'react-router-dom'
import { makeSelect, makeSelectIsAuthed, makeSelectCurrentUser } from '../../selectors'
import Actions from '../../actions'
import Header from '../../components/Header.js'
import Index from "../../components/Index";
import Footer from "../../components/Footer"
import HomePage from '../HomePage'
import CategoryPage from '../CategoryPage'
import ItemPage from '../ItemPage'
import CheckoutPage from '../CheckoutPage'
import CartPage from '../CartPage'
import LoginPage from '../LoginPage'
import LogoutPage from '../LogoutPage'
import RegisterPage from '../RegisterPage'
import PrivateRoute from '../PrivateRoute'
import NotFound from '../NotFound'

const App = ({ loadUser, authed, user }) => {

    useEffect(() => {
        // Load user from local storage, if available
        loadUser()
    }, []);
    
    return (
    <div>
        <Header isAuthed={authed} currentUser={user} />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/category/:categoryName" component={CategoryPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/item/:itemId" component={ItemPage} />
            <PrivateRoute path="/logout" component={LogoutPage} />
            <PrivateRoute path="/checkout" component={CheckoutPage} />
            <PrivateRoute path="/cart" component={CartPage} />
            <Route path="" component={NotFound} />
        </Switch>
        <Footer/>
    </div>)
};

const mapStateToProps = createStructuredSelector({
    authed: makeSelectIsAuthed(),
    user: makeSelectCurrentUser()
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: () => dispatch(Actions.loadLocalUser())
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(App);
