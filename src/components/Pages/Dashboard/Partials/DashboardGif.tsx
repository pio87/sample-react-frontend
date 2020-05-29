import React, { FunctionComponent } from 'react';
import DarkSide from '../../../../assets/dark.gif';
import LightSide from '../../../../assets/light.gif';
import styled from 'styled-components';
import { appOperations } from '../../../../store/App';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useTypedSelector } from '../../../../utils';
import { MainButton } from '../../../Shared/Styled';

const DashboardGif: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const themeName = useTypedSelector((state) => state.app.theme.name);

  const onSwitchSides = () => dispatch(appOperations.switchSides(themeName));

  return (
    <Container>
      <MainButton onClick={onSwitchSides}>{t('common.switchSides')}</MainButton>
      <Gif />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 3em;
  height: 100%;
`;
const Gif = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  background-image: ${(props) => `url('${props.theme.name === 'light' ? LightSide : DarkSide}')`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  transition: 0.5s background-image;
`;

export default DashboardGif;
