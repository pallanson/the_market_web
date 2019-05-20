import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import FilterLink from '../containers/FilterLink'
import {CategoryFilters} from '../constants'

const Categories = () => (
        <div className="col-lg-3 float-left">
            <div className="list-group">
                <FilterLink filter={CategoryFilters.SHOW_ALL}>All</FilterLink>
                <FilterLink filter={CategoryFilters.SHOW_GROCERIES}>Groceries</FilterLink>
                <FilterLink filter={CategoryFilters.SHOW_CLOTHING}>Clothing</FilterLink>
                <FilterLink filter={CategoryFilters.SHOW_TOYS}>Toys</FilterLink>
                <FilterLink filter={CategoryFilters.SHOW_HOME_DECORATIONS}>Home & Decorations</FilterLink>
                <FilterLink filter={CategoryFilters.SHOW_BUILDING_MATERIAL}>Building Materials</FilterLink>
            </div>
        </div>
);

export default Categories