import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Link from './Link'
import {CategoryFilters} from '../constants'

const Categories = () => (
    <div className="col-lg-3 float-left">
        <div className="list-group">
            <Link to={`category/${CategoryFilters.SHOW_ALL}`}>All</Link>
            <Link to={`category/${CategoryFilters.SHOW_GROCERIES}`}>Groceries</Link>
            <Link to={`category/${CategoryFilters.SHOW_CLOTHING}`}>Clothing</Link>
            <Link to={`category/${CategoryFilters.SHOW_TOYS}`}>Toys</Link>
            <Link to={`category/${CategoryFilters.SHOW_HOME_DECORATIONS}`}>Home & Decorations</Link>
            <Link to={`category/${CategoryFilters.SHOW_BUILDING_MATERIAL}`}>Building Materials</Link>
        </div>
    </div>
);

export default Categories