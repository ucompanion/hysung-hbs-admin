'use client';
import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';

const Main = () => {
	return (
		<Row xs={1} md={2} lg={3} className="g-4">
			<Col>
				<Card>
					<Card.Body>
						<Card.Title>Card</Card.Title>
						<Card.Text>
							This is a sample card content.
						</Card.Text>
						<Button variant="primary">Go</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title>Card</Card.Title>
						<Card.Text>
							This is a sample card content.
						</Card.Text>
						<Button variant="primary">Go</Button>
					</Card.Body>
				</Card>
			</Col>
			<Col>
				<Card>
					<Card.Body>
						<Card.Title>Card</Card.Title>
						<Card.Text>
							This is a sample card content.
						</Card.Text>
						<Button variant="primary">Go</Button>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	)
}
export default Main;