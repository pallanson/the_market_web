import React, {useState, memo} from 'react'
import Actions from '../../actions'
import { makeSelectItemsArray, makeSelectItemsPerPage } from '../../selectors'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Categories from "../../components/Categories";

import Shop from "../../components/Shop";

export const HomePage = ({ items = [], itemsPerPage }) => {
    const [page, setPage] = useState(1)

    return (
    <div className="container">
        <Categories/>
        <Shop 
            items={items.slice((page - 1) * itemsPerPage, page * itemsPerPage)}
            pages={Math.ceil(items.length / itemsPerPage)}
            page={page}
            setPage={setPage}
        />
    </div>
)}

const mapStateToProps = createStructuredSelector({
    items: makeSelectItemsArray(),
    itemsPerPage: makeSelectItemsPerPage(),
})

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(HomePage);