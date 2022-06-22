import {SET_POST_DETAIL, SET_POST_LIST } from "../types";

const initialState = {
    postList: [],
};

const postReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_POST_LIST:
            return {...state, postList: payload}
        case SET_POST_DETAIL:
            return {...state, postDetail: payload}
        default:
            return state;
        }
    };
export default postReducer;                

        
