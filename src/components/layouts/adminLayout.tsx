import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Button, Col, Collapse, Container, ListGroup, Nav, Navbar, Row } from 'react-bootstrap';

const AdminLayout = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

	return (
		<div className='page-wrapper'>
			<header className='page-header'>
				<Navbar bg="dark" variant="dark" expand="lg">
					<Container fluid>
						<Navbar.Brand href="#">효성HBS</Navbar.Brand>
						<Button
							variant="dark"
							onClick={() => setIsSidebarOpen(prev => !prev)}
							aria-controls="sidebar"
							aria-expanded={isSidebarOpen}
							className="navbar-toggler"
						>
							<span className='navbar-toggler-icon'></span>
						</Button>
					</Container>
				</Navbar>
			</header>

			<main className="page-body">
				<div className="page-container">
					<Container fluid>
						{/* 사이드바 */}
						<Collapse in={isSidebarOpen}>
							<Col
								id="sidebar"
								className="bg-light border-end p-0 sidenav"
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
				</div>
			</main>

			{/* <footer className="page-footer bg-light text-center py-3 mt-4">
				© 2025 MyApp. All rights reserved.
			</footer> */}
		</div>
	);
}

export default AdminLayout;
