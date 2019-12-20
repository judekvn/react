import React from 'react'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/authAction'

const Logout = (props) => {
    const {isAuthenticated} = props.auth
    return (
        <div>
            {isAuthenticated && <button onClick={props.logoutUser}>Logout</button>}
        </div>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, {logoutUser})(Logout)