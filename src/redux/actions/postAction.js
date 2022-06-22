import { SET_POST_DETAIL, SET_POST_LIST } from "../types";

export const setPostList = (posts) => ({
    
    type: SET_POST_LIST,
    payload: posts,
});
export const setPostDetail = (posts) => ({
    
    type: SET_POST_DETAIL,
    payload: posts,
});