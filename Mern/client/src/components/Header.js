import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../actions/authAction'
import { PromiseProvider } from 'mongoose'

const guestLink = (
    <div>
    <NavLink to="/login" activeClassName="is-active" exact={true}>Login</NavLink>
    <NavLink  to="/register" activeClassName="is-active" exact={true}>Register</NavLink>
    </div>    
)
const authLink = (
    <NavLink to="/logout" activeClassName="is-active" exact={true}>logout</NavLink>
)

const Header = (props) => {
        const {isAuthenticated} = props.auth
        return (
        <header>
        <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
        <NavLink to="/book" activeClassName="is-active" exact={true}>Books</NavLink>
        <NavLink to="/buyer" activeClassName="is-active" exact={true}>Buy</NavLink>
        <div>{isAuthenticated ? authLink : guestLink}</div>
        </header>    
    )
}
    

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps)(Header)