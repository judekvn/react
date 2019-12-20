import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'
import jwt_decode from 'jwt-decode'

const registerUser = (user, history) => (dispatch) => {
    axios
        .post('/api/user/', user)
        .then(res => history.push('/login'))
        .catch(err => 
            dispatch({
                type: 'GET_ERRORS'
            })
        )
}

export const loginUser = (user) => dispatch => {
    axios
        .post('/api/auth/', user)
        .then(res => {
            const token = res.data
            localStorage.setItem('jwtToken', token)
            setAuthToken(token)

            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err => 
            dispatch({
                type: 'GET_ERRORS'
            })
        )
}

export const setCurrentUser = (decoded) => ({
    type: "SET_CURRENT_USER",
    user: decoded
})

export const logoutUser = () => dispatch => {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    dispatch(setCurrentUser({}))
}
export default registerUser