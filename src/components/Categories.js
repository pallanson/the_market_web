import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Link from './Link'
import {CategoryFilters, CategoryPrettyNames} from '../constants'

const Categories = () => (
    <div className="col-lg-3 float-left">
        <div className="list-group">
            <Link to={`/`}>All</Link>
            {
                Object.keys(CategoryFilters).map((key) => 
                    <Link key={key} to={`/category/${CategoryFilters[key]}`}>{ CategoryPrettyNames[key] }</Link>
                )
            }
        </div>
    </div>
);

export default Categories