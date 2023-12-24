import { FC } from 'react';
import { InputField } from '../../components/form/InputField';
import { Input } from '../../components/form/Input';
import { Button } from '../../components/form/Button';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './style';
import { LogoPic } from '../../assets/img/index';
import { LOGIN_ROUTE } from '../../utils/consts';
import * as T from './types/index';
import {
	useSetRegisterUserMutation,
	useSetLoginUserMutation,
} from '../../store/service/goodsService';
import { useDispatch } from 'react-redux';
import { setUser, setAccessToken } from '../../store/slices/userSlice';

export const Register: FC = () => {
	const dispatch = useDispatch();
	const [postReg] = useSetRegisterUserMutation();
	const [postToken] = useSetLoginUserMutation();
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<T.TSignUp>();

	const onSubmit = async (data: T.TSignUp) => {
		await postReg({
			body: {
				email: data.email,
				password: data.password,
				name: data.name,
			},
		})
			.unwrap()
			.then(async (response: T.TUser) => {
				dispatch(
					setUser({
						email: response.email,
						password: response.password,
						name: response.name,
					})
				);
				// await postToken({
				// 	body: {
				// 		email: data.email,
				// 		password: data.password,
				// 	},
				// })
				// 	.unwrap()
				// 	.then((token) => {
				// 		dispatch(
				// 			setAccessToken({
				// 				access_token: token.access_token,
				// 				refresh_token: token.refresh_token,
				// 				token_type: token.token_type,
				// 			})
				// 		);
				// 	})
				// 	.catch((err) => alert(err));
			});
		setTimeout(() => {
			navigate(LOGIN_ROUTE);
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
							required: 'Заполните данное поле',
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
							required: 'Заполните данное поле',
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
				<InputField error={errors.repeat?.message}>
					<Input
						type="password"
						{...register('repeat', {
							validate: (value) =>
								value === getValues('password') ||
								'Пароли не совпадают',
							required: 'Заполните данное поле',
						})}
						placeholder="Repeat Password"
					/>
				</InputField>
				<InputField error={errors.name?.message}>
					<Input
						{...register('name', {
							required: 'Заполните данное поле',
							pattern: {
								value: /^[A-Z0-9._%+-]+$/i,
								message: 'Некорректный ник',
							},
						})}
						placeholder="Name"
					/>
				</InputField>
				<InputField error={errors.surname?.message}>
					<Input {...register('surname')} placeholder="Surname" />
				</InputField>
				<InputField error={errors.city?.message}>
					<Input {...register('city')} placeholder="City" />
				</InputField>
				<S.Buttons>
					<Button type="submit" $color>
						Зарегистрироваться
					</Button>
				</S.Buttons>
			</S.Form>
		</S.Wrapper>
	);
};
