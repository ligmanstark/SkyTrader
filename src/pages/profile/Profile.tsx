import { FC } from 'react';
import * as S from './style';
import { Container } from '../../styled/components';
import { HelmetHead } from '../../components/HelmetHead';
import { SubHeader } from '../../components/subHeader/SubHeader';
import { YourProfileComponent } from '../../components/yourProfile/YourProfileComponent';
export const Profile: FC = () => {
    return (
        <S.Wrapper>
        <HelmetHead
            title={`Авито на свой лад`}
            descr={`Заработай свой первый рубль!`}
        />

        <Container>
                <SubHeader />
                <YourProfileComponent/>
         </Container>
    </S.Wrapper>
)
};
