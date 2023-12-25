import { FC } from 'react';
import { InputField } from '../../components/form/InputField';
import { Input } from '../../components/form/Input';
import { Button } from '../../components/form/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { LogoPic } from '../../assets/img/index';
import { MAIN_ROUTE } from '../../utils/consts';
import * as T from './types/index';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setUser, setAccessToken } from '../../store/slices/userSlice';
import {
	useSetLoginUserMutation,
	useLazyGetUserQuery,
} from '../../store/service/goodsService';
export const Login: FC = () => {
	const [postToken] = useSetLoginUserMutation();
	const [postLogin] = useLazyGetUserQuery();
	const dispatch = useDispatch();
	const navigate = useNavigate();
const getToken = useSelector((state:RootState)=>state.userReducer.access_token)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<T.TSignUp>();

	const onSubmit = async (data: T.TSignUp) => {
		await postToken({
			body: {
				email: data.email,
				password: data.password,
			},
		})
			.unwrap()
			.then((token: any) => {
				dispatch(
					setAccessToken({
						access_token: token.access_token,
						refresh_token: token.refresh_token,
						token_type: token.token_type,
					})
				);

				postLogin({ accessToken: token.access_token })
					.unwrap()
					.then((login) => {
						dispatch(
							setUser({
								email: login.email,
								name: login.name,
							})
						);
					});
			});
		setTimeout(() => {
			localStorage.setItem('token', getToken as string);

			navigate(MAIN_ROUTE,
				// { replace: true }
			);
		}, 1500);
		
	};

	return (
		<S.Wrapper>
			<S.Form onSubmit={handleSubmit(onSubmit)}>
				<S.Logo>
					<LogoPic />
				</S.Logo>
				<InputField error={errors.email?.message}>
					<Input
						{...register('email', {
							required: 'Почта обязательна',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Некорректный адрес электронной почты',
							},
						})}
						placeholder="Email"
					/>
				</InputField>
				<InputField error={errors.password?.message}>
					<Input
						type="password"
						{...register('password', {
							required: 'Пароль обязательна',
							minLength: {
								value: 6,
								message: 'Пароль должен содержать минимум 7 символов',
							},
							maxLength: {
								value: 20,
								message: 'Максимальная длина пороля 20 символов',
							},
							pattern: {
								value: /(?=.*[0-9])/,
								message: 'Пароль должен содержать хотя бы одну цифру',
							},
						})}
						placeholder="Password"
					/>
				</InputField>

				<S.Buttons>
					<Button type="submit" $color>
						Войти
					</Button>
				</S.Buttons>
			</S.Form>
		</S.Wrapper>
	);
};
