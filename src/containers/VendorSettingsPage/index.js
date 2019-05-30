import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import Actions from '../../actions'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import AccountSidebar from '../../components/AccountSidebar'
import AddItemForm from "../../components/AddItemForm";
import CreateVendorForm from "../../components/CreateVendorForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { makeSelectIsCurrentUserVendor, makeSelectCurrentUserVendorId, makeSelectVendors } from '../../selectors';

export const VendorSettingsPage = ({ isVendor, vendorId, createVendor, createItem }) => {

    return (
        <div className="container row" align="center">
            <AccountSidebar/>
            <div className="col-8">
                {
                    isVendor ?
                    (
                        <AddItemForm vendorId={vendorId} createItem={createItem} />
                    ) : (
                        <CreateVendorForm createVendor={createVendor} />
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isVendor: makeSelectIsCurrentUserVendor(),
    vendorId: makeSelectCurrentUserVendorId(),
    vendors: makeSelectVendors()
})

const mapDispatchToProps = (dispatch) => {
    return {
        addAddress: (evt, name, addressLineOne, addressLineTwo, city, country, postcode) => {
            evt && evt.preventDefault()
            dispatch(Actions.addAddress(name, addressLineOne, addressLineTwo, city, country, postcode))
        },
        getAddresses: () => dispatch(Actions.getAddresses()),
        createVendor: (evt, name) => {
            evt && evt.preventDefault()
            dispatch(Actions.createVendor(name))
        },
        createItem: (evt, name, price, description, category, vendorId, imageUrl) => {
            evt && evt.preventDefault()
            dispatch(Actions.createItem(name, price, description, category, vendorId, imageUrl))
        }
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  
export default compose(withConnect)(VendorSettingsPage);