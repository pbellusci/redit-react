import "./home.css";
import React from "react";
import Page from "./page";
import { connect } from "react-redux";

class Home extends React.Component {
	constructor(props) {
		super();
	}

	render() {
		return <Page loading={this.props.isFetching} />;
	}
}
const mapStateToProps = state => {
	return {
		isFetching: state.posts.isFetching
	};
};

const mapDispatchToProps = dispatch => {
	return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
