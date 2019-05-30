import React, { useState, memo } from 'react'
import Actions from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectSearchString, makeSelectItemsPerPage, makeSelectIsAuthed, makeSelectSearchResults } from '../../selectors'
import Categories from "../../components/Categories"
import Shop from "../../components/Shop"

export const CategoryPage = ({ setCategory, searchStr, itemsPerPage, items, match, authed, addToCart }) => {
    const [page, setPage] = useState(1)
    return (
        <div className="container">
            <Categories/>
            <h3>Search results for "{ searchStr }"</h3>
            <Shop 
                items={items.slice((page - 1) * itemsPerPage, page * itemsPerPage)}
                itemClick={addToCart}
                pages={Math.ceil(items.length / itemsPerPage)}
                authed={authed}
                page={page}
                setPage={setPage}
            />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: makeSelectSearchResults(),
    searchStr: makeSelectSearchString(),
    itemsPerPage: makeSelectItemsPerPage(),
    authed: makeSelectIsAuthed()
})

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: ({itemId}) => dispatch(Actions.addToCart(itemId))
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(CategoryPage);