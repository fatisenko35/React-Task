import { setPostList } from "./actions/postAction";
import axios from "axios";

const url = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(url);
            dispatch(setPostList(response.data.slice(0,4)));
        } catch (error) {
            console.log(error);
        }
        

    }

}