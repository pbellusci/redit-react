import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
import TimeAgo from "timeago-react";

function userAvatar(thumbnail) {
	if (thumbnail === "self" || thumbnail === "default") {
		return "https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png";
	} else {
		return thumbnail;
	}
}

function Page(props) {
	let $date = new Date(props.created * 1000);
	let $createdAt = $date.toUTCString();

	return (
		<Fragment>
			<Row className={props.dismissed === true ? "d-none" : "post no-gutters"}>
				{/* Visible Mobile */}
				<Col xs='12' className='d-xs-block d-sm-none d-md-none d-lg-none'>
					<Row>
						<Col xs='12' className='text-center'>
							<h3 className='username'>
								<i
									className={props.read === false ? "fa fa-circle" : "d-none"}
								></i>
								{props.author}
							</h3>
						</Col>
						<Col xs='12' className='date text-center'>
							<TimeAgo datetime={$createdAt} />
						</Col>
					</Row>

					{/*  Post Content */}

					<Row>
						<Col xs='12  text-center'>
							<img
								alt='User Avatar'
								src={userAvatar(props.thumbnail)}
								className='img-fluid'
							/>
						</Col>
						<Col xs='12' className='content-wrapper d-table  text-center'>
							<div className='d-table-cell align-middle'>
								<p className='content'>{props.title}</p>
							</div>
						</Col>

						<Col xs='12' className='d-table text-center'>
							<div
								onClick={() => {
									props.displayPost(props.id);
								}}
								className='d-table-cell align-middle arrow-wrapper'
							>
								<i className='fa fa-arrow-right'></i>
							</div>
						</Col>
					</Row>

					{/*  Post Footer */}

					<Row>
						<Col xs='12' className='text-center'>
							<button
								type='button'
								className='dismiss-post mx-auto'
								onClick={() => {
									props.dismissPost(props.id);
								}}
							>
								<i className='fa fa-times-circle'></i> Dismiss Post
							</button>
						</Col>
						<Col xs='12' className='comments-counter text-center'>
							{props.num_comments} Comments
						</Col>
					</Row>
				</Col>

				{/* Visible No Mobile*/}

				<Col xs='12' className='d-none d-sm-block d-md-block d-lg-block'>
					{/*  Post Header */}
					<Row>
						<Col xs='6'>
							<h3 className='username'>
								<i
									className={props.read === false ? "fa fa-circle" : "d-none"}
								></i>
								{props.author}
							</h3>
						</Col>
						<Col xs='6' className='date text-right'>
							<TimeAgo datetime={$createdAt} />
						</Col>
					</Row>

					{/*  Post Content */}

					<Row>
						<Col xs='3'>
							<img
								alt='User Avatar'
								src={userAvatar(props.thumbnail)}
								className='img-fluid'
							/>
						</Col>
						<Col xs='7' className='content-wrapper d-table'>
							<div className='d-table-cell align-middle'>
								<p className='content'>{props.title}</p>
							</div>
						</Col>

						<Col xs='1' className='d-table'>
							<div
								onClick={() => {
									props.displayPost(props.id);
								}}
								className='d-table-cell align-middle arrow-wrapper'
							>
								<i className='fa fa-arrow-right'></i>
							</div>
						</Col>
					</Row>

					{/*  Post Footer */}

					<Row>
						<Col xs='6'>
							<button
								type='button'
								className='dismiss-post'
								onClick={() => {
									props.dismissPost(props.id);
								}}
							>
								<i className='fa fa-times-circle'></i> Dismiss Post
							</button>
						</Col>
						<Col xs='6' className='comments-counter text-right'>
							{props.num_comments} Comments
						</Col>
					</Row>
				</Col>
			</Row>
		</Fragment>
	);
}

export default Page;
