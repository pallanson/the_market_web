import { createActions } from "reduxsauce/lib/reduxsauce";

/* Action Types & Creators */
const { Types, Creators } = createActions({
    login: ["email", "password"],
    register: ["email", "firstName", "lastName", "password"],
    logout: null,
    getAddresses: null,
    addAddress: ["name", "addressLineOne", "addressLineTwo", "city", "country", "postcode"],
    editAddress: ["addressId", "name", "addressLineOne", "addressLineTwo", "city", "country", "postcode"],
    removeAddress: ["addressId"],
    getCart: null,
    addToCart: ["itemId"],
    removeFromCart: ["itemId"],
    checkout: null,
    getReviews: ["itemId"],
    postReview: ["itemId", "title", "text", "rating"],
    editReview: ["itemId", "title", "text", "rating"],
    removeReview: ["itemId"],
    updateRating: ["itemId", "rating"],
    addPaymentOption: ["nameOnCard", "cardNumber", "expiryDate"],
    getPaymentOptions: null,
    getPaymentOption: ["paymentId"],
    editPaymentOption: ["paymentId", "nameOnCard", "cardNumber", "expiryDate"],
    deletePaymentOption: ["paymentId"],
    getAllVendors: null,
    getVendor: ["vendorId"],
    getVendorByName: ["name"],
    getStore: ["vendorId"],
    createVendor: ["name"],
    updateVendor: ["vendorId", "name"],
    getAllItems: null,
    getItem: ["itemId"],
    getItemByName: ["name"],
    createItem: ["name", "price", "description", "category", "vendorId"],
    updateItem: ["itemId", "name", "price", "description", "category"],
    deleteItem: ["itemId"],
    setCategory: ["category"],
    search: ["searchString"],
    fetchUser: ["userId"]
});

export { Types };
export default Creators