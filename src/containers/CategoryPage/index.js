import React, { useEffect, useState, memo } from 'react'
import Actions from '../../actions'
import { CategoryPrettyNames, CategoryFilters } from '../../constants'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectItemsInCategory, makeSelectItemsPerPage, makeSelectIsAuthed } from '../../selectors'
import Categories from "../../components/Categories"
import Shop from "../../components/Shop"

const getCategoryName = (category) => {
    const constant = Object.keys(CategoryFilters).find(cat => CategoryFilters[cat] === category)
    if (constant) {
        return CategoryPrettyNames[constant]
    }

    return category
}

export const CategoryPage = ({ setCategory, itemsPerPage, items, match, authed, addToCart }) => {
    const { categoryName } = match.params
    const [fetched, setFetched] = useState(null)
    const [page, setPage] = useState(1)
    useEffect(() => {
        if (fetched !== categoryName) {
            setCategory(categoryName)
            setFetched(categoryName)
        }
    }, [fetched, setCategory, categoryName])
    return (
        <div className="container">
            <Categories/>
            <h3>{ getCategoryName(categoryName) }</h3>
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
    items: makeSelectItemsInCategory(),
    itemsPerPage: makeSelectItemsPerPage(),
    authed: makeSelectIsAuthed()
})

const mapDispatchToProps = (dispatch) => {
    return {
        setCategory: (cat) => dispatch(Actions.setCategory(cat)),
        addToCart: ({itemId}) => dispatch(Actions.addToCart(itemId))
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(CategoryPage);