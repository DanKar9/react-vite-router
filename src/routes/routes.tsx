import {MainPage} from '../Pages/MainPage/MainPage.tsx';
import {LoginPage} from '../Pages/LoginPage/LoginPage.tsx';
import {RegisterPage} from '../Pages/RegisterPage/RegisterPage.tsx';

export const routes = [
	{ index: true, element: <MainPage /> },
	{ path: '/register', element: <RegisterPage /> },
	{ path: '/login', element: <LoginPage /> }
];