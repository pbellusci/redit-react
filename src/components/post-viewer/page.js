import React, { Fragment } from 'react'
import { Row, Col } from 'react-bootstrap'

function Page(props) {
    return (
        <Fragment>
            <Row className="post-viewer text-center">
                <Col xs='12' className={props.activePost.author === '' ? 'd-none' : 'd-block'}>

                    {/* Post viewer: User Name */}

                    <Row>
                        <Col xs='12'>
                            <h1> {props.activePost.author} </h1>
                        </Col>
                    </Row>

                    {/* Post viewer: User Image */}

                    <Row>
                        <Col xs='12'>
                            <img
                                alt="User Avatar"
                                src={props.activePost.thumbnail}
                                className='img-fluid'
                            />
                        </Col>
                    </Row>

                    {/* Post viewer: User Comment */}

                    <Row>
                        <Col xs='12'>
                            <p>
                                {props.activePost.title}
                            </p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Fragment>
    )
}

export default Page;