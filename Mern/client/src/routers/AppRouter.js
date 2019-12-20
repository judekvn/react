import { BrowserRouter, Route } from 'react-router-dom'
import React from 'react'
import Home from '../components/Home'
import Book from '../components/Book'
import Buyer from '../components/Buyer'
import Register from '../components/Register'
import Login from '../components/Login'
import Header from '../components/Header'
import Logout from '../components/Logout'


const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <div className="App">
        <Route path="/" component={Home} exact={true}/>
        <Route path="/book" component={Book} exact={true}/>
        <Route path="/buyer" component={Buyer} exact={true}/>
        <Route path="/register" component={Register} exact={true}/>
        <Route path="/login" component={Login} exact={true}/>
        <Route path="/logout" component={Logout} exact={true}/>
        </div>
    </BrowserRouter>
)

export default AppRouter