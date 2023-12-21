import { FC } from 'react';
import { InputField } from '../../components/form/InputField';
import { Input } from '../../components/form/Input';
import { Button } from '../../components/form/Button';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './style';
import { LogoPic } from '../../assets/img/index';
import { LOGIN_ROUTE } from '../../utils/consts';
import * as T from './types/index';

export const Register: FC = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
	} = useForm<T.TSignUp>();

	const onSubmit = (data: T.TSignUp) => {
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
				<InputField error={errors.repeat?.message}>
					<Input
						type="password"
						{...register('repeat', {
							validate: (value) =>
								value === getValues('password') ||
								'Пароли не совпадают',
							required: 'Повтор пароля обязателено',
						})}
						placeholder="Repeat Password"
					/>
				</InputField>
				<InputField error={errors.name?.message}>
					<Input {...register('name')} placeholder="Name" />
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
