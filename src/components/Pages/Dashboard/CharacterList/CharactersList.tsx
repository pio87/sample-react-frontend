import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import CharacterItem from './CharacterItem';
import { Character } from '../../../../store/Characters/types';
import Loader from '../../../Shared/Loader';
import { ErrorMessage, LoaderWrapper, NoResults } from '../../../Shared/Styled';

type CharactersListProps = {
  data: Character[];
  error: string | null;
  loading: boolean;
};

const CharactersList: FunctionComponent<CharactersListProps> = ({ data, error, loading }) => {
  const { t } = useTranslation();

  if (error) {
    return <ErrorMessage>{t('common.errorOccurred')}</ErrorMessage>;
  }

  if (!data.length && !loading) {
    return <NoResults>{t('common.noResults')}</NoResults>;
  }

  return (
    <Container>
      <Title>{t('pages.characters.foundLStarWarsCharacters')}:</Title>
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
      {data.map((character) => (
        <CharacterItem key={character.url} character={character} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 2em;
  position: relative;
`;

const Title = styled.h3`
  font-style: italic;
  margin: 1em 0;
`;

export default CharactersList;
