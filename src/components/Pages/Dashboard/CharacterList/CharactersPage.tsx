import React, { FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import SearchBar from '../Partials/SearchBar';
import CharactersList from './CharactersList';
import { charactersActions, charactersOperations } from '../../../../store/Characters';
import { useTypedSelector } from '../../../../utils';
import { useTranslation } from 'react-i18next';
import { SmoothThemeSwitch } from '../../../Shared/Styled';

const CharactersPage: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { data, loading, error, pagination } = useTypedSelector((state) => state.characters);

  const fetchData = async () => await dispatch(charactersOperations.getCharacters());

  useEffect(() => {
    fetchData();
  }, [pagination.page]);

  const onNextPage = async () => {
    dispatch(charactersActions.setActivePage(pagination.page + 1));
  };

  const onPreviousPage = async () => {
    dispatch(charactersActions.setActivePage(pagination.page - 1));
  };

  return (
    <Container>
      <SearchBar />

      {pagination.totalPages >= 1 && (
        <NavigationContainer>
          <PreviousButton disabled={loading || pagination.page <= 1} onClick={onPreviousPage}>
            &lt; {t('common.previous')}
          </PreviousButton>
          <NavigationCounter>
            {pagination.page}/{pagination.totalPages}
          </NavigationCounter>
          <NextButton disabled={loading || pagination.page >= pagination.totalPages} onClick={onNextPage}>
            {t('common.next')} &gt;
          </NextButton>
        </NavigationContainer>
      )}

      <CharactersList data={data} loading={loading} error={error} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 3em;
`;

const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const NavigationCounter = styled.span`
  margin: 0 1em;
`;

const NavigationButton = styled.button`
  ${SmoothThemeSwitch};
  flex-grow: 1;
  cursor: pointer;
  padding: 5px 15px;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => props.theme.colors.backgrounds.secondary};
`;

const NextButton = styled(NavigationButton)`
  text-align: right;
`;
const PreviousButton = styled(NavigationButton)`
  text-align: left;
`;

export default CharactersPage;
