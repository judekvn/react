const errorDefaultState = {}

export default (state = errorDefaultState, action) => {
    switch(action.type) {
        case 'GET_ERRORS':
            return 'error'
        default:
            return state
    }
}