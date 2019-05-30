import React, { useEffect, useState, memo } from 'react'
import Actions from '../../actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectItemsInCategory } from '../../selectors';

export const CategoryPage = ({ setCategory, items, match }) => {
    const [fetched, setFetched] = useState(false)
    useEffect(() => {
        if (!fetched) {
            setCategory(match.params.categoryName)
            setFetched(true)
        }
    }, [fetched, setCategory, match.params.categoryName])
    return (
        <div className="container" align="center">
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    items: makeSelectItemsInCategory()
})

const mapDispatchToProps = (dispatch) => {
    return {
        setCategory: (cat) => dispatch(Actions.setCategory(cat))
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(CategoryPage);