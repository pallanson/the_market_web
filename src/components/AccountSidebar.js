import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import Link from './Link'
import {AccountOptions, AccountPrettyOptions} from '../constants'

const AccountSidebar = () => (
    <div className="col-lg-3 float-left">
        <div className="list-group">
            {
                Object.keys(AccountOptions).map((key) =>
                    <Link key={key} to={`/${AccountOptions[key]}`}>{ AccountPrettyOptions[key] }</Link>
                )
            }
        </div>
    </div>
);

export default AccountSidebar