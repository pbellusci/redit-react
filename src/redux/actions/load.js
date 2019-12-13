import {
    LOAD_POSTS_ACTION_SUCCESS,
    LOAD_POSTS_ACTION_ERROR,
    DISMISS_ALL_POSTS
} from "../types";

import Axios from "axios";
const TOP_POSTS_URL = "https://api.reddit.com/top?limit=50";
const read = false;
const dismissed = false;

const mapPosts = posts => {
    let $posts = [];

    posts.data.children.forEach((el, index) => {
        let {
            author,
            created_utc,
            thumbnail,
            title,
            url,
            num_comments,
            id
        } = el.data;

        $posts.push([
            author,
            created_utc,
            thumbnail,
            title,
            url,
            num_comments,
            id,
            read,
            dismissed
        ]);
    });
    return { data: $posts };
};

export const loadTopPostsSuccess = posts => {
    return {
        type: LOAD_POSTS_ACTION_SUCCESS,
        posts
    };
};

export const loadTopPostsError = error => {
    return {
        type: LOAD_POSTS_ACTION_ERROR,
        error
    };
};

export const dismissAllPosts = posts => {
    return {
        type: DISMISS_ALL_POSTS,
        posts
    };
}

export const loadTopPosts = () => {
    return dispatch => {
        return Axios.get(TOP_POSTS_URL)
            .then(response => {
                dispatch({
                    type: LOAD_POSTS_ACTION_SUCCESS,
                    posts: mapPosts(response.data)
                });
            })
            .catch(error => {
                dispatch({
                    type: LOAD_POSTS_ACTION_ERROR,
                    posts: error
                });
                console.log(error);
            });
    };
};
