import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import RSSForm from '../RSSForm';

const RSSContainer: FC = () => {
	return (
		<Container fluid as="section" className="bg-dark p-4 pt-0">
			<Row className="justify-content-center">
				<Col className="text-white" lg="9" md="10">
					<RSSForm />
				</Col>
			</Row>
		</Container>
	);
};

export default RSSContainer;
