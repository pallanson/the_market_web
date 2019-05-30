import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { Link } from 'react-router-dom';

const SearchForm = ({onSearch}) => {
    const [search, setSearch] = useState('')
    return (
        <div className="col-12">
            <div className="input-group mb-3">
                <input 
                    type="text" 
                    className="form-control"
                    onChange={({ target }) => {
                        setSearch(target.value)
                        onSearch(target.value)
                    }} 
                    placeholder="Search...">
                </input>
                <div className="input-group-append">
                    <Link to={`/search`}><button className="btn btn-confirm">Search</button></Link>
                </div>
            </div>
        </div>
    )
}

export default SearchForm