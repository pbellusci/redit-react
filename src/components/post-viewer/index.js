import './post-viewer.css'
import React from 'react'
import Page from './page'
import { connect } from 'react-redux'

class PostViewer extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <Page activePost={this.props.activePost.activePost} />
        )
    }
}
const mapStateToProps = (state) => {
    return {
        activePost: state.activePost
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostViewer)