import { Route, Routes } from 'react-router-dom';
import { Footer, Header } from './components';
import { HomePage, LoginPage } from './pages';

export const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/'>
					<Route index element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
				</Route>
			</Routes>
			<Footer />
		</>
	);
};
