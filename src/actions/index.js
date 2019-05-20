import { createActions } from "reduxsauce/lib/reduxsauce";

/* Action Types & Creators */
const { Types, Creators } = createActions({
    login: ["username", "password"],
    register: ["username", "email", "password"],
    setCategory: ["category"],
    searchItem: ["itemName"],
    createVendor: ["name"],
    addItem: ["name", "price", "description", "category"],
    removeItem: ["itemId"],
    addAddress: ["lineOne", "lineTwo", "city", "country", "postcode"],
    removeAddress: ["addressId"],
    addPayment: ["name", "number", "expiration"],
    removePayment: ["paymentId"],
    addReview: ["title", "text", "rating"],

    loginFailure: ["message"],
    registerFailure: ["message"],
    loginSuccess: null,
    logout: null,
    registerSuccess: null,
    userFailure: null,
});

export const MarketTypes = Types;
export default Creators

/* Category Constants */
export const CategoryFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_GROCERIES: 'SHOW_GROCERIES',
    SHOW_CLOTHING: 'SHOW_CLOTHING',
    SHOW_TOYS: 'SHOW_TOYS',
    SHOW_HOME_DECORATIONS: 'SHOW_HOME_DECORATIONS',
    SHOW_BUILDING_MATERIAL: 'SHOW_BUILDING_MATERIAL'
};