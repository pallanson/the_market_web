import React, { useEffect, useState, memo } from 'react'
import Actions from '../../actions'
import { CategoryPrettyNames, CategoryFilters } from '../../constants'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectItemsPerPage, makeSelectIsAuthed, makeSelectCurrentVendorItems, makeSelectVendors } from '../../selectors'
import Categories from "../../components/Categories"
import Shop from "../../components/Shop"

const getStoreName = ({userId, vendors}) => {
    if (vendors[userId]) {
        return vendors[userId].name
    }

    return 'Shop'
}

export const StorePage = ({ setCurrentVendor, itemsPerPage, items, match, authed, addToCart, vendors }) => {
    const { userId } = match.params
    const [fetched, setFetched] = useState(null)
    const [page, setPage] = useState(1)
    useEffect(() => {
        if (fetched !== userId) {
            setCurrentVendor(userId)
            setFetched(userId)
        }
    }, [fetched, setCurrentVendor, userId])
    return (
        <div className="container">
            <Categories/>
            <h3>{ getStoreName({userId, vendors}) }</h3>
            <Shop
                noBanner={true}
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
    items: makeSelectCurrentVendorItems(),
    vendors: makeSelectVendors(),
    itemsPerPage: makeSelectItemsPerPage(),
    authed: makeSelectIsAuthed()
})

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrentVendor: (userId) => dispatch(Actions.setCurrentVendor(userId)),
        addToCart: ({itemId}) => dispatch(Actions.addToCart(itemId))
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(StorePage);