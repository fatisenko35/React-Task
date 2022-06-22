import { VIEWS_COUNTER } from "../types";

const initialState = 
    [
        {
        counter: 0,
        id : 1
    }, 
    {
        counter: 0,
        id : 2
    },
    {   counter: 0,
        id : 3
    },
    {   counter : 0,
        id : 4}
    ];


const viewReducer = (state = initialState, action) => {
    
    switch (action.type) {
    case VIEWS_COUNTER:
            return {
                ...state,counter: initialState.filter(item => item.id === action.payload.id).map(item => item.counter = action.payload.counter)
            }
    default:
        return state;
    }
    
}
export default viewReducer;