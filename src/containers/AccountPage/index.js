import React, {memo} from 'react'
import Actions from '../../actions'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../index.css';
import { makeSelectIsAuthed, makeSelectError, makeSelectCurrentUser } from '../../selectors'
import AccountSidebar from '../../components/AccountSidebar'
import AccountInfo from "../../components/AccountInfo"

export const AccountPage = ({currentUser, deleteUser}) => {

    return (
        <div className="container row" align="center">
            <AccountSidebar/>
            <AccountInfo {...currentUser} deleteUser={deleteUser}/>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    authed: makeSelectIsAuthed(),
    error: makeSelectError(),
    currentUser: makeSelectCurrentUser()
})
  
  const mapDispatchToProps = (dispatch) => {
    return {
      deleteUser: () => {
        if (window.confirm(`We're sad to see you go ;´(!\nPressing confirm will delete all evidence of you existing ;)`)) {
          dispatch(Actions.deleteUser())
        }
      }
    }
  }

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps
  )
  
export default compose(withConnect, memo)(AccountPage);