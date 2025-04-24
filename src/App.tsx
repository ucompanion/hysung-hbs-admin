import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// User Layout
import AdminLayout from './components/layouts/adminLayout';

// User Pages
import Main from "./pages/main";
import Prototype from "./pages/prototype";
import NotFound from "./NotFound";

const Router = () => {
	return (
		<BrowserRouter basename="/hysung-hbs-admin">
			<Routes>
				{/* Main Pages */}
				<Route path="/" element={<AdminLayout />}>
					<Route path="/adminm/prototype" element={<Prototype />} />
					<Route index element={<Main />} />
				</Route>

				{/* System Pages */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Router;