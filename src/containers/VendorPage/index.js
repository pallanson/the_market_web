import { Redirect } from 'react-router-dom'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import auth from '../../utils/auth';
import AddItemForm from '../../components/AddItemForm'
import CreateVendorForm from '../../components/CreateVendorForm'
import VendorItemList from "../../components/VendorItemList";

export default (props) => {
    const isAuthed = auth.getToken() != null

    // Check if user already has
    return !isAuthed ? (
        <div className="container" align="center">
            <AddItemForm />
            <VendorItemList />
        </div>
    ) : (
        <CreateVendorForm />
    )
}