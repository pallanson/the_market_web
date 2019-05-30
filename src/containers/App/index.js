import React, { useEffect, memo } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Switch, Route } from 'react-router-dom'
import { makeSelect, makeSelectIsAuthed, makeSelectCurrentUser } from '../../selectors'
import Actions from '../../actions'
import Header from '../../components/Header.js'
import Footer from "../../components/Footer"
import HomePage from '../HomePage'
import AboutPage from '../AboutPage'
import ContactPage from '../ContactPage'
import CategoryPage from '../CategoryPage'
import ItemPage from '../ItemPage'
import CheckoutPage from '../CheckoutPage'
import CartPage from '../CartPage'
import LoginPage from '../LoginPage'
import LogoutPage from '../LogoutPage'
import AccountPage from '../AccountPage'
import SitemapPage from '../SitemapPage'
import VendorPage from '../VendorPage'
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
            <Route exact path="/about" component={AccountPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route path="/category/:categoryName" component={CategoryPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/item/" component={ItemPage} />
            <Route path="/sitemap" component={SitemapPage} />
            <PrivateRoute path="/logout" component={LogoutPage} />
            <Route path="/account" component={AccountPage} />
            <Route path="/vendor" component={VendorPage} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/cart" component={CartPage} />
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
