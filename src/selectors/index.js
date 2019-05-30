import { createSelector, createSelectorCreator } from 'reselect'
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

const makeSelectCurrentReviews = () =>
    createSelector(
        selectApp,
        ({currentReviews}) => currentReviews
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
            return items.filter(item => item.category.toLowerCase() === currentCategory)
        }
    )

const makeSelectCurrentItem = () =>
    createSelector(
        makeSelectItems(),
        selectApp,
        (items, {currentItem}) => items[currentItem]
    )

const makeSelectSearchString = () => 
    createSelector(
        selectApp,
        ({searchString}) => searchString 
    )

const makeSelectItemsPerPage = () =>
    createSelector(
        selectApp,
        ({itemsPerPage}) => itemsPerPage
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

const makeSelectMyReview = () =>
    createSelector(
        makeSelectCurrentReviews(),
        makeSelectCurrentUser(),
        (reviews, currentUser) => reviews.find(review => review.userId === currentUser.userId)
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
    makeSelectCurrentItem,
    makeSelectCurrentReviews,
    makeSelectItemsInCategory,
    makeSelectLoading,
    makeSelectPaymentMethods,
    makeSelectItemsPerPage,
    makeSelectSearchResults,
    makeSelectSearchString,
    makeSelectMyReview,
    makeSelectUsers,
    makeSelectVendors
}