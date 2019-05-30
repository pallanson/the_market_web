import React, { memo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../index.css'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { makeSelectVendorsArray } from '../../selectors'
import Categories from "../../components/Categories"
import Link from "../../components/Link"

export const VendorPage = ({ vendors }) => {
    return (
        <div className="container">
            <Categories/>
            <h3>Vendors</h3>
            <div className="list-group">
                {
                    vendors.map(({ userId, name }, key) => (
                        <Link key={key} to={`/vendor/${userId}`}>{ name }</Link>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    vendors: makeSelectVendorsArray()
})

const mapDispatchToProps = (dispatch) => ({
})

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default compose(withConnect, memo)(VendorPage);