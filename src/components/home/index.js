import "./home.css";
import React from "react";
import Page from "./page";

class Home extends React.Component {
	constructor(props) {
		super();
	}

	render() {
    const $loading = true
		return <Page loading={$loading} />;
	}
}

export default Home;
