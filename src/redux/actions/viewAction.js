import { VIEWS_COUNTER } from "../types"

export const increase = (posts) => {
    return {
        type : VIEWS_COUNTER,
        payload : posts
     }
 }