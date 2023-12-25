import { Navigate, Outlet } from 'react-router-dom';
import { FC } from 'react';

interface IProtectedRoute {
	auth: boolean;
}

export const ProtectedRoute: FC = () => {
	if (localStorage.length < 1 && localStorage.getItem('token') === '') {
		return <Navigate to="/login" replace={true} />;
	}
	return <Outlet />;
};
