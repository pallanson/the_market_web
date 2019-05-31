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
import {
    makeSelectMyItems,
    makeSelectIsCurrentUserVendor,
    makeSelectCurrentUserVendorId,
    makeSelectVendors 
} from '../../selectors';

export const VendorSettingsPage = ({ isVendor, items, vendorId, createVendor, createItem }) => {

    return (
        <div className="container row" align="center">
            <AccountSidebar/>
            <div className="col-8">
                {
                    isVendor ?
                    (
                        <div className="row">
                            <div className="col-9">
                                <h3>My Items</h3>
                                {items.length > 0 ? items.map((item, key) => {
                                    const { name, price, itemId } = item
                                    return (
                                        <div className="input-group-prepend" key={key}>
                                            <p className="m-3">{ name } - {price} (ID: { itemId })</p>
                                        </div>
                                    )
                                }) : <p>No items in your store</p>}
                            </div>
                            <AddItemForm className="col-9" vendorId={vendorId} createItem={createItem} />
                        </div>
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
    items: makeSelectMyItems(),
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