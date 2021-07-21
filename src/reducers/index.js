
const reducer = (state, action) => {
    if (state === undefined) {
        return {
            trainers: [],
            loading: true,
            error: null
        };
    }
    switch (action.type) {
        case 'FETCH_TRAINERS_SUCCESS':
            return {
                trainers: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_TRAINERS_SUCCESS':
            return {
                trainers: action.payload,
                loading: false,
                error: null
            };
          
        case 'FETCH_TRAINERS_FAILURE':
            return {
                trainers: [],
                loading: false,
                error: action.payload
            };
          
        default:
            return state
    }
}
export default reducer