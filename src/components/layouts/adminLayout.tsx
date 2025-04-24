import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Col, Collapse, Container, ListGroup, Nav, Navbar, Row } from 'react-bootstrap';

const AdminLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

	return (
		<div className='page-wrapper'>
			<header className='page-header'>
				<Navbar bg="dark" variant="dark" expand="lg">
					<Container>
						<Navbar.Brand href="#">효성HBS</Navbar.Brand>
						<Button
							variant="outline-light"
							onClick={() => setIsSidebarOpen(prev => !prev)}
							aria-controls="admin-sidebar"
							aria-expanded={isSidebarOpen}
							className="me-2"
						>
							버튼
						</Button>
					</Container>
				</Navbar>
			</header>

			<main className="page-body">
				<Container fluid className='page-container'>
					{/* 사이드바 */}
					<Collapse in={isSidebarOpen} dimension="width" className='sidenav'>
						<Col
							id="sidebar"
							xs={12}
							md={3}
							lg={2}
							className="bg-light border-end p-0"
						>
							<ListGroup variant="flush">
								<ListGroup.Item action href="#dashboard">
									Dashboard
								</ListGroup.Item>
								<ListGroup.Item action href="#analytics">
									Analytics
								</ListGroup.Item>
								<ListGroup.Item action href="#orders">
									Orders
								</ListGroup.Item>
								<ListGroup.Item action href="#products">
									Products
								</ListGroup.Item>
								<ListGroup.Item action href="#settings">
									Settings
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Collapse>

					{/* 메인 패널 */}
					<Outlet />
				</Container>
			</main>
		</div>
	);
}

export default AdminLayout;
