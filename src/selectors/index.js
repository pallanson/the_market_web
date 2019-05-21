import { createSelector } from 'reselect'
import { initialState } from '../constants'
import { search } from '../reducers';

const selectApp = state => state.app || initialState

const selectRouter = state => state.router

const makeSelectCurrentUser = () =>
    createSelector(
        selectApp,
        ({ currentUser }) => currentUser
    )

const makeSelectLoading = () =>
    createSelector(
        selectApp,
        ({ loading }) => loading
    )

const makeSelectError = () =>
    createSelector(
        selectApp,
        ({error}) => error 
    )

const makeSelectCart = () =>
    createSelector(
        selectApp,
        ({cart}) => cart 
    )

const makeSelectItems = () =>
    createSelector(
        selectApp,
        ({items}) => items 
    )

const makeSelectCurrentCategory = () =>
    createSelector(
        selectApp,
        ({currentCategory}) => currentCategory 
    )

const makeSelectItemsInCategory = () =>
    createSelector(
        selectApp,
        ({currentCategory}) => currentCategory,
        ({ items }, currentCategory) => Object.values(items).filter(item => item.category === currentCategory)
    )

const makeSelectSearchResults = () =>
    createSelector(
        selectApp,
        ({searchString}) => searchString,
        ({ items }, searchString) => Object.values(items).filter(item => item.name.includes(searchString))
    )

const makeSelectSearchString = () => 
    createSelector(
        selectApp,
        ({searchString}) => searchString 
    )

const makeSelectAddresses = () => 
    createSelector(
        selectApp,
        ({addresses}) => addresses 
    )

const makeSelectPaymentMethods = () =>
    createSelector(
        selectApp,
        ({paymentMethods}) => paymentMethods
    )

const makeSelectVendors = () =>
    createSelector(
        selectApp,
        ({vendors}) => vendors 
    )

export {
    selectApp,
    selectRouter,
    makeSelectAddresses,
    makeSelectCart,
    makeSelectCurrentCategory,
    makeSelectCurrentUser,
    makeSelectError,
    makeSelectItems,
    makeSelectItemsInCategory,
    makeSelectLoading,
    makeSelectPaymentMethods,
    makeSelectSearchResults,
    makeSelectSearchString,
    makeSelectVendors
}