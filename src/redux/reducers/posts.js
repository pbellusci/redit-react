import {
    LOAD_POSTS_ACTION,
    LOAD_POSTS_ACTION_SUCCESS,
    LOAD_POSTS_ACTION_ERROR,
    DISMISS_ALL_POSTS
} from '../types'

const defaultState = {
    data: [],
    isFetching: true,
    error: false
};

function reducer(state = defaultState, { type, posts }) {
    switch (type) {

        case LOAD_POSTS_ACTION:
            return Object.assign({}, state, {
                data: [],
                error: false,
                isFetching: true
            })

        case LOAD_POSTS_ACTION_SUCCESS:
            return Object.assign({}, state, {
                data: posts.data,
                isFetching: false,
                error: false
            })

        case LOAD_POSTS_ACTION_ERROR:
            return Object.assign({}, state, {
                error: true,
                msg: posts,
                isFetching: false
            })

        case DISMISS_ALL_POSTS:

            let $dismissedPosts = [...state.data]
            $dismissedPosts.forEach((post, index) => {
                $dismissedPosts[index][8] = true
            })

            return Object.assign({}, state, {
                data: $dismissedPosts,
                isFetching: false,
                error: false
            })

        default:
            return state;
    }
}

export default reducer