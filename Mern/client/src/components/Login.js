import React, {useState, Component} from 'react'
import {connect} from 'react-redux'
import {loginUser} from '../actions/authAction'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.change = this.change.bind(this)
        this.submit = this.submit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/book')
        }
    }

    change(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    submit(e) {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userData)
    }

    render() {
        const {errors} = this.state
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.submit}>
                <div>
                <label>Email</label>
                <input type="text" name="email" value={this.state.email} onChange={this.change}/>
                </div>
                <div>
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.change}/>
                </div>
                <button>Login</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, {loginUser})(Login)