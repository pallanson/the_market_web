import { createSelector } from 'reselect'
import { initialState } from '../constants'

const selectApp = state => state.app || initialState

const selectRouter = state => state.router

const makeSelectCurrentUser = () =>
    createSelector(
        selectApp,
        ({ currentUser }) => currentUser
    )

const makeSelectIsAuthed = () =>
    createSelector(
        selectApp,
        ({loggedIn}) => loggedIn
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

const makeSelectItemsArray = () =>
    createSelector(
        selectApp,
        ({items}) => Object.values(items)
    )

const makeSelectCurrentCategory = () =>
    createSelector(
        selectApp,
        ({currentCategory}) => currentCategory 
    )

const makeSelectItemsInCategory = () =>
    createSelector(
        makeSelectItemsArray(),
        makeSelectCurrentCategory(),
        (items, currentCategory) => {
            console.log(items)
            return items.filter(item => item.category === currentCategory)
        }
    )

const makeSelectSearchString = () => 
    createSelector(
        selectApp,
        ({searchString}) => searchString 
    )

const makeSelectSearchResults = () =>
    createSelector(
        makeSelectItemsArray(),
        makeSelectSearchString(),
        (items, searchString) => items.filter(item => item.name.includes(searchString))
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

const makeSelectUsers = () =>
    createSelector(
        selectApp,
        ({users}) => users 
    )

export {
    selectApp,
    selectRouter,
    makeSelectIsAuthed,
    makeSelectAddresses,
    makeSelectCart,
    makeSelectCurrentCategory,
    makeSelectCurrentUser,
    makeSelectError,
    makeSelectItems,
    makeSelectItemsArray,
    makeSelectItemsInCategory,
    makeSelectLoading,
    makeSelectPaymentMethods,
    makeSelectSearchResults,
    makeSelectSearchString,
    makeSelectUsers,
    makeSelectVendors
}