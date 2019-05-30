import React, {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { connect } from 'react-redux'
import Actions from '../../actions'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import AccountSidebar from '../../components/AccountSidebar'
import AddressForm from "../../components/AddressForm";
import { makeSelectAddresses } from '../../selectors';

export const AddressesPage  = ({ addresses, getAddresses, addAddress }) => {
    const [fetched, setFetched] = useState(false)
    useEffect(() => {
        if (!fetched) {
            getAddresses()
            setFetched(true)
        }
    }, [fetched, getAddresses, setFetched])
    return (
        <div className="container row" align="center">
            <AccountSidebar/>
            <div className="col-8">
                {addresses.length > 0 ? addresses.map((address, key) => {
                    const {
                        name,
                        addressLineOne,
                        addressLineTwo,
                        city,
                        country,
                        postcode
                    } = address
                    return (
                        <div className="input-group-prepend" key={key}>
                            <p className="m-3">{name}: { addressLineOne }, {addressLineTwo}, {city} - {postcode}, {country}</p>
                        </div>
                    )
                }) : <p>No shipping addresses on file</p>}
                <AddressForm addAddress={addAddress} />
            </div>
        </div>
    ) 
}

const mapStateToProps = createStructuredSelector({
    addresses: makeSelectAddresses()
})
  
const mapDispatchToProps = (dispatch) => {
    return {
        addAddress: (evt, name, addressLineOne, addressLineTwo, city, country, postcode) => {
            evt && evt.preventDefault()
            dispatch(Actions.addAddress(name, addressLineOne, addressLineTwo, city, country, postcode))
        },
        getAddresses: () => dispatch(Actions.getAddresses()),
    }
}

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  
export default compose(withConnect)(AddressesPage);