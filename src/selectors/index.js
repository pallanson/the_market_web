import { createSelector, createSelectorCreator } from 'reselect'
import { initialState } from '../constants'
import { select } from 'redux-saga/effects';

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

const makeSelectSearchResults = () =>
    createSelector(
        makeSelectItemsArray(),
        makeSelectSearchString(),
        (items, searchString) => items.filter(item => item.name.toLowerCase().includes(searchString) || item.description.toLowerCase().includes(searchString))
    )

const makeSelectItemsPerPage = () =>
    createSelector(
        selectApp,
        ({itemsPerPage}) => itemsPerPage
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

const makeSelectVendorsArray = () =>
    createSelector(
        selectApp,
        ({vendors}) => Object.values(vendors)
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
        (reviews = [], currentUser) => reviews.find(review => currentUser && review.userId === currentUser.userId)
    )

const makeSelectCurrentCartCount = () =>
    createSelector(
        makeSelectCart(),
        (cart) => cart.reduce((acum, cur) => acum + cur.quantity, 0)
    )

const makeSelectCartTotal = () =>
    createSelector(
        makeSelectCart(),
        makeSelectItems(),
        (cart, items) => cart.reduce((acum, cur) => acum + (items[cur.itemId] ? items[cur.itemId].price : 0) * cur.quantity, 0)
    )

const makeSelectCurrentPaymentMethod = () =>
    createSelector(
        selectApp,
        ({currentPaymentMethod}) => currentPaymentMethod
    )

const makeSelectCurrentAddress = () =>
    createSelector(
        selectApp,
        ({currentAddress}) => currentAddress
    )

const makeSelectCurrentVendor = () =>
    createSelector(
        selectApp,
        ({currentVendor}) => currentVendor
    )

const makeSelectOrder = () =>
    createSelector(
        selectApp,
        ({order}) => order
    )

const makeSelectIsCurrentUserVendor = () => 
    createSelector(
        makeSelectVendors(),
        makeSelectCurrentUser(),
        (vendors, user) => {
            if (!user) return false
            return !!vendors[user.userId]
        }
    )

const makeSelectCurrentUserVendorId = () => 
    createSelector(
        makeSelectVendors(),
        makeSelectCurrentUser(),
        (vendors, user) => {
            if (!user) return null
            if (!vendors[user.userId]) return null
            return vendors[user.userId].vendorId
        }
    )

const makeSelectCurrentVendorItems = () =>
    createSelector(
        makeSelectVendors(),
        makeSelectItemsArray(),
        makeSelectCurrentVendor(),
        (vendors, items, currentVendor) => {
            if (!currentVendor || !vendors[currentVendor]) return []
            const vendorId = vendors[currentVendor].vendorId
            if (!vendorId) return []
            return items.filter(item => item.vendorId === vendorId)
        }
    )

export {
    selectApp,
    selectRouter,
    makeSelectIsAuthed,
    makeSelectAddresses,
    makeSelectCart,
    makeSelectVendorsArray,
    makeSelectCartTotal,
    makeSelectCurrentVendor,
    makeSelectCurrentUserVendorId,
    makeSelectCurrentCategory,
    makeSelectCurrentPaymentMethod,
    makeSelectCurrentVendorItems,
    makeSelectCurrentAddress,
    makeSelectCurrentUser,
    makeSelectError,
    makeSelectItems,
    makeSelectItemsArray,
    makeSelectCurrentItem,
    makeSelectIsCurrentUserVendor,
    makeSelectCurrentReviews,
    makeSelectItemsInCategory,
    makeSelectLoading,
    makeSelectPaymentMethods,
    makeSelectItemsPerPage,
    makeSelectSearchResults,
    makeSelectSearchString,
    makeSelectCurrentCartCount,
    makeSelectMyReview,
    makeSelectUsers,
    makeSelectVendors,
    makeSelectOrder
}