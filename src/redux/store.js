import { createStore, combineReducers, applyMiddleware } from "redux";
import posts from "./reducers/posts";
import activePost from "./reducers/active_post";
import thunk from "redux-thunk";

const reducer = combineReducers({
	posts,
	activePost
});
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
