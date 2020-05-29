import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import DashboardGif from './Partials/DashboardGif';
import CharactersPage from './CharacterList/CharactersPage';
import { Redirect, Route, Switch } from 'react-router';
import linksConstants from '../../../config/app/linksConstants';
import CharacterDetails from './CharacterDetails/CharacterDetails';
import Footer from '../../Shared/Footer';
import { SmoothThemeSwitch } from '../../Shared/Styled';

const DashboardPage: FunctionComponent<{}> = () => {
  return (
    <DashboardContainer>
      <GifArea>
        <DashboardGif />
      </GifArea>

      <DataArea>
        <Switch>
          <Route exact={false} path={linksConstants.CHARACTERS.DETAILS} component={CharacterDetails} />;
          <Route exact={true} path={linksConstants.CHARACTERS.INDEX} component={CharactersPage} />;
          <Redirect to={linksConstants.CHARACTERS.INDEX} />
        </Switch>
      </DataArea>

      <FooterArea>
        <Footer />
      </FooterArea>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr ${(props) => props.theme.sizes.footerHeight};
  grid-template-areas:
    'gif data'
    'footer footer';
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr ${(props) => props.theme.sizes.footerHeight};
    grid-template-areas:
      'data'
      'footer';
  }
`;

const GifArea = styled.div`
  ${SmoothThemeSwitch};
  grid-area: gif;
  background-color: ${(props) => props.theme.colors.backgrounds.primary};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;
const DataArea = styled.div`
  ${SmoothThemeSwitch};
  grid-area: data;
  background-color: ${(props) => props.theme.colors.backgrounds.secondary};
  overflow: auto;
`;
const FooterArea = styled.div`
  ${SmoothThemeSwitch};
  grid-area: footer;
  text-align: center;
  background-color: ${(props) => props.theme.colors.backgrounds.alternative};
  color: ${(props) => props.theme.colors.fonts.alternative};
  font-size: 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #fff;
`;

export default DashboardPage;
