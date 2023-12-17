import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import * as T from './types/index';
import { BASE_URL } from '../../utils/consts';
import { RootState } from '../store';

export const goodsApi = createApi({
	reducerPath: 'goodsApi',
	tagTypes: ['Users', 'Goods'],
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		mode: 'no-cors',
		// prepareHeaders: (headers, { getState }) => {
		// 	const token = (getState() as RootState).goodsApi.;

		// 	if (token) {
		// 		headers.set('authorization', `Bearer ${token}`);
		// 	}
		// 	return headers;
		// },
	}),
	endpoints: (builder) => ({
		getAllGoods: builder.query<T.TGoods[], void>({
			query: () => ({
				url: '/ads/',
				method: 'GET',
				headers: {
					'content-type': 'application/json',
				},
			}),
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Goods' as const,
								id,
							})),
							{ type: 'Goods', id: 'LIST' },
]
					: [{ type: 'Goods', id: 'LIST' }],
		}),
		getAllUsers: builder.query<T.TUsers[], void>({
			query: () => ({
				url: '/user/all',
				method: 'GET',
				headers: {
					'content-type': 'application/json',
				},
			}),
			providesTags: (result) =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Users' as const,
								id,
							})),
							{ type: 'Users', id: 'LIST' },
]
					: [{ type: 'Users', id: 'LIST' }],
		}),
		setRegisterUser: builder.mutation<T.TRegisterUser, {body:T.TRegisterUserReq}>({
			query: ({body}) => ({
				url: '/auth/register',
				method: 'POST',
				body,
				headers: {
					'content-type': 'application/json',
			},
			}),
		}),
		setLoginUser: builder.mutation<T.TUserAuth, {body:T.TUserReq}>({
			query: ({body}) => ({
				url: '/auth/login',
				method: 'POST',
				body,
				headers: {
					'content-type': 'application/json',
				},
			}),
		}),
		setRefreshToken: builder.mutation<T.TRefreshToken, T.TRefreshTokenReq>({
			query: (body) => ({
				url: '/auth/login',
				method: 'PUT',
				body,
				headers: {
					'content-type': 'application/json',
				},
			}),
		}),
		getUser: builder.query<T.TUpdateUser, {accessToken:string}>({
			query: ({accessToken}) => ({
				url: '/user',
				method: 'GET',
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}),
		}),
		updateUser: builder.mutation<T.TUpdateUser, {body:T.TUpdateUserReq,accessToken:string}>({
			query: ({body,accessToken}) => ({
				url: '/user',
				method: 'PATCH',
				body,
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}),
		}),
		updatePassword: builder.mutation<T.TUpdatePassword, {body:T.TUpdatePasswordReq,accessToken:string}>(
			{
				query: ({body,accessToken}) => ({
					url: '/user/password',
					method: 'PUT',
					body,
					headers: {
						'content-type': 'application/json',
						Authorization: `Bearer ${accessToken}`,

					},
				}),
			}
		),
		updateUserAvatar: builder.mutation<object, {body:FormData,accessToken:string}>({
			query: ({body,accessToken}) => ({
				url: '/user/avatar',
				method: 'POST',
				credentials: 'include',
				body,
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${accessToken}`,
				},
			}),
		}),
	}),
});

export const {
	useGetAllGoodsQuery,
	useGetAllUsersQuery,
	useSetLoginUserMutation,
	useSetRefreshTokenMutation,
	useSetRegisterUserMutation,
	useLazyGetAllGoodsQuery,
	useLazyGetAllUsersQuery,
	useUpdateUserMutation,
	useUpdatePasswordMutation,
	useUpdateUserAvatarMutation,
} = goodsApi;
