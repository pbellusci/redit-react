import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";

function Page(props) {
	return (
		<Fragment>
			<Row className={props.loading ? 'row justify-content-md-center align-items-center vertical-center loading-app-msg' : 'd-none'}>
				<Col xs='6' className='text-center'>
					<i className='fa fa-spin fa-spinner fa-5x' />
					<h1 className='mt-1'> Retrieving Data </h1>
				</Col>
			</Row>
		</Fragment>
	);
}

export default Page;
