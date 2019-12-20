import React from 'react'
import BookForm from './BookForm'
import {connect} from 'react-redux'
const Book = (props) => {

    return (
        <div>
            <h1>Books Page</h1>
            <BookForm />
        </div>
    )
}

export default Book