import axios from 'axios'

export const getBooks = () => dispatch => {
    dispatch(setBookLoading())
    axios.get('/api/book/')
        .then(res =>
            dispatch({
                type: "GET_BOOKS",
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: "GET_BOOKS",
                payload: {}
            })    
        )
}

export const addBook = (bookData) => dispatch => {
    axios.post('/api/book/', bookData)
        .then(res =>
            dispatch({
                type: "ADD_BOOK",
                payload: res.data
            })
        )
        .catch(err =>
            dispatch({
                type: "GET_ERRORS",
                payload: err.response.data
            })    
        )
}

export const setBookLoading = () => {
    return {
        type: "BOOK_LOADING"
    }
}