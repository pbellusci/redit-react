import './post.css'
import React from 'react'
import Page from './page'
import { connect } from 'react-redux'
import { setActivePost } from '../../redux/actions/setActive'

class Post extends React.Component {

    constructor() {
        super()

        this.displayPost = this.displayPost.bind(this)
        this.dismissPost = this.dismissPost.bind(this)
        this.toggleVisibility = this.toggleVisibility.bind(this)
    }

    //same method for dismiss or "read"
    toggleVisibility(index) {
        return this.setState((state, props) => {
            if (props.post[index] == true) {
                return props.post
            } else {
                let $updated = props.post
                $updated[index] = true
                return $updated
            }
        })
    }

    displayPost(ownProps) {
        this.toggleVisibility(7)
        this.props.setActivePost(ownProps)
    }

    dismissPost() {
        this.toggleVisibility(8)
    }

    render() {

        const [
            author,
            created_utc,
            thumbnail,
            title,
            url,
            num_comments,
            id,
            read,
            dismissed
        ] = this.props.post

        return (
            <Page
                author={author}
                created={created_utc}
                thumbnail={thumbnail}
                title={title}
                url={url}
                num_comments={num_comments}
                id={id}
                displayPost={this.displayPost}
                dismissPost={this.dismissPost}
                read={read}
                dismissed={dismissed}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setActivePost: () => {
            dispatch(setActivePost(ownProps.post))
            //
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)