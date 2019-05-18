import { combineReducers } from "redux/es/redux"
import {CategoryFilters, SET_CATEGORY} from "../actions";

/*
    Default State Variables:
    Category:
    Login:
    Cart:
 */

const initialState = {
    category: CategoryFilters.SHOW_ALL,

}

function the_market(state = initialState, action) {
    // TODO: Handle actions here
    switch (action.type) {
        case SET_CATEGORY:
            return Object.assign({}, state, {
                category: action.filter
            });
        default:
            return state
    }
}

export default combineReducers({
})