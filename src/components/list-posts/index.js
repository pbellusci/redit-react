import React from "react";
import Page from "./page";
import { connect } from "react-redux";
import { loadTopPosts, dismissAllPosts } from "../../redux/actions/load";
import './list-posts.css'
class ListPosts extends React.Component {
    componentDidMount() {
        this.props.loadTopPosts();
        this.filteredPosts = this.filteredPosts.bind(this)
    }

    //not dismissed posts
    filteredPosts(posts) {
        return posts.filter(post => (post[8] === false))
    }

    render() {
        return (
            <div>
                <div>
                    <Page posts={this.filteredPosts(this.props.posts.data)} dismissAll={this.props.dismissAll} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopPosts: () => dispatch(loadTopPosts()),
        dismissAll: () => dispatch(dismissAllPosts())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPosts);
