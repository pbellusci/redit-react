import {
    SET_ACTIVE_POST
} from '../types'

import { validtPostId } from '../../global'

const defaultState = {
    activePost: {
        author: '',
        created_utc: '',
        thumbnail: '',
        title: '',
        url: '',
        num_comments: '',
        id: ''
    }
};



function reducer(state = defaultState, { type, post = null }) {

    switch (type) {
        case SET_ACTIVE_POST:
            if (!validtPostId(post)) {
                return {
                    ...state
                }
            } else {
                return Object.assign({}, state, {
                    activePost: {
                        author: post[0],
                        created_utc: post[1],
                        thumbnail: post[2],
                        title: post[3],
                        url: post[4],
                        num_comments: post[5],
                        id: post[6],
                        read: true,
                        dismissed: false
                    }
                })
            }

        default:
            return state;
    }
}

export default reducer