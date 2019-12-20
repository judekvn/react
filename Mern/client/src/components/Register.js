import React, { useState } from 'react'
import {connect} from 'react-redux'
import registerUser from '../actions/authAction'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'


const Register = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)
    const [errors, setError] = useState({})

    const { user } = props.auth
    const error  = props.errors

    const handleSubmit = (e) => {
        e.preventDefault()
        const newUser = {
            name,
            email,
            password,
            isAdmin
        }
        props.registerUser(newUser, props.history)  
    }
    
    return (
        <div>
            
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label>Email Address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Admin</label>
                <input type="checkbox" value={isAdmin} onChange={e => setIsAdmin(!!e.target.value)}/>
            </div>
            <button type="submit">Sign Up</button>
            </form>
        </div>
        )  
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export default connect(mapStateToProps, {registerUser})(withRouter(Register))