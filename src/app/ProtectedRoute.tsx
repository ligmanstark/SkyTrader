import { Navigate, Outlet } from 'react-router-dom';
import { FC } from 'react';

interface IProtectedRoute {
	auth: boolean;
}

export const ProtectedRoute: FC = () => {
	if (localStorage.getItem('token') === '') {
		return <Navigate to="/login" replace={true} />;
	}
	return <Outlet />;
};
