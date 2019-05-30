import React, { useEffect, memo } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Switch, Route } from 'react-router-dom'
import {
    makeSelectIsAuthed,
    makeSelectCurrentUser,
    makeSelectCurrentCartCount
} from '../../selectors'
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
import PaymentsPage from '../PaymentsPage'
import AddressesPage from '../AddressesPage'
import VendorPage from '../VendorPage'
import RegisterPage from '../RegisterPage'
import PrivateRoute from '../PrivateRoute'
import NotFound from '../NotFound'

const App = ({ loadUser, loadItems, loadCart, authed, user, cartItems }) => {

    useEffect(() => {
        // Load user from local storage, if available
        loadUser()
        // Load all items
        loadItems()
        // Load the cart
        loadCart()
    }, [loadUser, loadItems, loadCart]);
    
    return (
    <div>
        <Header isAuthed={authed} currentUser={user} cartItems={cartItems} />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route path="/category/:categoryName" component={CategoryPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/item/:itemId" component={ItemPage} />
            <Route path="/sitemap" component={SitemapPage} />
            <PrivateRoute path="/logout" component={LogoutPage} />
            <PrivateRoute path="/account" component={AccountPage} />
            <PrivateRoute path="/payments" component={PaymentsPage}/>
            <PrivateRoute path="/addresses" component={AddressesPage}/>
            <PrivateRoute path="/vendor" component={VendorPage} />
            <PrivateRoute path="/checkout" component={CheckoutPage} />
            <PrivateRoute path="/cart" component={CartPage} />
            <Route path="" component={NotFound} />
        </Switch>
        <Footer/>
    </div>)
};

const mapStateToProps = createStructuredSelector({
    authed: makeSelectIsAuthed(),
    user: makeSelectCurrentUser(),
    cartItems: makeSelectCurrentCartCount()
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: () => dispatch(Actions.loadLocalUser()),
        loadItems: () => dispatch(Actions.getAllItems()),
        loadCart: () => dispatch(Actions.getCart())
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(App);
