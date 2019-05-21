import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectItemsInCategory } from '../../selectors';

export const CategoryPage = () => (
    <div className="container" align="center">
    </div>
)

const mapStateToProps = createSelector(
    makeSelectItemsInCategory()
)

export default connect(mapStateToProps)(CategoryPage)