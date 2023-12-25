import { FC,useRef,MutableRefObject } from 'react';
import * as S from './style';
import { TComments } from '../../../store/service/types/TComments';
import { Button } from '../../form/Button';
import { Close } from '../../../assets/img/index';
import { InputField } from '../../form/InputField';
import { ItemComments } from './ItemComments';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/store';
import { useModal } from '../../../hooks/useModal';
import { usePostCommentMutation } from '../../../store/service/goodsService';
import { addComments } from '../../../store/slices/commentsSlice';
export const ModalComments: FC = () => {
	const textRef = useRef() as MutableRefObject<HTMLTextAreaElement>;
	const dispatch = useDispatch();
	const [postComment] = usePostCommentMutation();
	const { close } = useModal('comments');

	const comments = useSelector(
		(state: RootState) => state.commentsReducer.data
	);
	const idCurrentState = useSelector(
		(state: RootState) => state.goodsReducer.idCurrentState
	);
	const accessToken = useSelector(
		(state: RootState) => state.userReducer.access_token
	);

	console.log(comments);
	const handlePostComment = async () => {
		await postComment({
			id: idCurrentState,
			accessToken: accessToken as string,
			body:textRef.current.value
		})
			.unwrap()
			.then((POST: TComments) => {
				dispatch(addComments(POST));
			});
	};
	return (
		<S.Wrapper>
			<div style={{ overflow: 'auto' }}>
				<S.Box>
					<S.SubBoxHeader>
						<h1 style={{ fontSize: '2rem' }}>Отзывы о товаре</h1>
						<div style={{ cursor: 'pointer' }} onClick={() => close()}>
							<Close />
						</div>
					</S.SubBoxHeader>

					<S.SubBox>
						<h2>Добавить отзыв</h2>
						<InputField>
							<S.SubBoxContent>
								<label form="name"></label>
								<S.TextArea
									required
									placeholder="Введите отзыв"
									name="comment"
									id="comment"
									ref={textRef}
								></S.TextArea>
								<Button $border onClick={handlePostComment}>
									Опубликовать
								</Button>
							</S.SubBoxContent>
						</InputField>
					</S.SubBox>
				</S.Box>
				<S.Content>
					{comments
						? comments.map((comment) => (
								<ItemComments key={comment.id} {...comment} />
						  ))
						: ''}
				</S.Content>
			</div>
		</S.Wrapper>
	);
};
