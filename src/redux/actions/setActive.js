import {
    SET_ACTIVE_POST,
    GET_ACTIVE_POST
} from '../types'


export const setActivePost = post => {
    return {
        type: SET_ACTIVE_POST,
        post: post
    }
}

export const getActivePost = post => {
    return {
        type: GET_ACTIVE_POST,
        post
    }
}