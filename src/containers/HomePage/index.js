import React, {memo} from 'react'
import Actions from '../../actions'
import { makeSelectItemsArray } from '../../selectors'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import Categories from "../../components/Categories";

import Shop from "../../components/Shop";

export const HomePage = ({ items = [] }) => (
    <div className="container">
        <Categories/>
        <Shop items={items}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    items: makeSelectItemsArray()
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