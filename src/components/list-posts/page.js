import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import Post from '../post'

function Page(props) {

    return (
        <Fragment>
            <Row className='header-posts'>
                <Col xs='12' className='section-title text-center'>
                    <h2> Reddit Posts</h2>
                </Col>
            </Row>
            <Row className='wrapper-posts overflow-auto'>
                <Col xs='12' className='lis-post-wrapper'>
                    {props.posts.map((post, index) => (
                        <Post key={index} post={post} />
                    ))}
                </Col>
            </Row>
            <Row className='footer-posts'>
                <Col xs='12' className='text-center'>
                    <button type="button" className='dismiss-all-button' onClick={() => { props.dismissAll() }}>
                        Dismiss All
        </button>
                </Col>
            </Row>



        </Fragment>
    )
}

export default Page;