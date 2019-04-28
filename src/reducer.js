//reducer
const initialState = {
    category: 'female'
}

export function myApp(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return {
                category: state.category == 'female' ? 'male' : 'female'
            }
        default:
            return {
                category: 'female'
            }
    }
}