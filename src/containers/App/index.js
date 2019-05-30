import React, { useEffect, memo } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import { Switch, Route } from 'react-router-dom'
import {
    makeSelectIsAuthed,
    makeSelectCurrentUser,
    makeSelectCurrentCartCount,
    makeSelectIsCurrentUserVendor
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
import VendorsPage from '../VendorPage'
import VendorSettingsPage from '../VendorSettingsPage'
import RegisterPage from '../RegisterPage'
import StorePage from '../StorePage'
import SearchPage from '../SearchPage'
import OrderCompletePage from '../OrderCompletePage'
import PrivateRoute from '../PrivateRoute'
import NotFound from '../NotFound'

const App = ({ loadUser, loadItems, loadCart, loadVendors, authed, user, cartItems }) => {

    useEffect(() => {
        // Load user from local storage, if available
        loadUser()
        // Load all items
        loadItems()
        // Load the cart
        loadCart()
        // Load vendors
        loadVendors()
    }, [loadUser, loadItems, loadCart, loadVendors]);
    
    return (
    <div className="App">
        <Header isAuthed={authed} currentUser={user} cartItems={cartItems} />
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/category/:categoryName" component={CategoryPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/item/:itemId" component={ItemPage} />
            <Route path="/vendor/:userId" component={StorePage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/sitemap" component={SitemapPage} />
            <Route path="/vendor" component={VendorsPage} />
            <PrivateRoute path="/order-complete" component={OrderCompletePage} />
            <PrivateRoute path="/logout" component={LogoutPage} />
            <PrivateRoute exact path="/account" component={AccountPage} />
            <PrivateRoute path="/account/payments" component={PaymentsPage}/>
            <PrivateRoute path="/account/addresses" component={AddressesPage}/>
            <PrivateRoute path="/account/vendor" component={VendorSettingsPage} />
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
    isVendor: makeSelectIsCurrentUserVendor(),
    cartItems: makeSelectCurrentCartCount()
})

const mapDispatchToProps = (dispatch) => {
    return {
        loadUser: () => dispatch(Actions.loadLocalUser()),
        loadItems: () => dispatch(Actions.getAllItems()),
        loadCart: () => dispatch(Actions.getCart()),
        loadVendors: () => dispatch(Actions.getAllVendors())
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(App);
