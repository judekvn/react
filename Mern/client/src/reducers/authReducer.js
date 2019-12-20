const authDefaultState = {
    isAuthenticated: false,
    user: {}
}

const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);


export default (state = authDefaultState, action) => {
    switch(action.type) {
        case "SET_CURRENT_USER":
            return {
                ...state,
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }
        default:
            return state
    }
}