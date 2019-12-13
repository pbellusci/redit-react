import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import ListPosts from "../list-posts";
import PostViewer from "../post-viewer";

function Page(props) {
	return (
		<Fragment>
			<Row className={props.loading ? 'row justify-content-md-center align-items-center vertical-center loading-app-msg' : 'd-none'}>
				<Col xs='6' className='text-center'>
					<i className='fa fa-spin fa-spinner fa-5x' />
					<h1 className='mt-1'> Retrieving Data </h1>
				</Col>
			</Row>
			<Row className={props.loading ? 'd-none' : 'd-block no-gutters'}>
				<Col xs='12'>
					<Col xs='6' className='no-gutters float-left vh-100 list-posts'>
						<ListPosts />
					</Col>
					<Col xs='6' className='no-gutters float-left vh-100'>
						<PostViewer />
					</Col>
				</Col>
			</Row>
		</Fragment>
	);
}

export default Page;
