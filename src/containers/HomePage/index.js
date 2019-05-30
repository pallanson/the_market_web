import React, {useState, memo} from 'react'
import Actions from '../../actions'
import { makeSelectItemsArray, makeSelectItemsPerPage, makeSelectIsAuthed } from '../../selectors'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import SearchForm from "../../components/SearchForm"
import Categories from "../../components/Categories";

import Shop from "../../components/Shop";

export const HomePage = ({ items = [], onSearch, itemsPerPage, authed, addToCart }) => {
    const [page, setPage] = useState(1)

    return (
    <div className="container">
        <SearchForm onSearch={onSearch} />
        <Categories/>
        <Shop 
            items={items.slice((page - 1) * itemsPerPage, page * itemsPerPage)}
            pages={Math.ceil(items.length / itemsPerPage)}
            itemClick={addToCart}
            authed={authed}
            page={page}
            setPage={setPage}
        />
    </div>
)}

const mapStateToProps = createStructuredSelector({
    items: makeSelectItemsArray(),
    itemsPerPage: makeSelectItemsPerPage(),
    authed: makeSelectIsAuthed()
})

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: ({itemId}) => dispatch(Actions.addToCart(itemId)),
        onSearch: (searchStr) => dispatch(Actions.search(searchStr))
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(HomePage);