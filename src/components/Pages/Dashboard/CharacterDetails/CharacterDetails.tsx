import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RouteComponentProps } from 'react-router';
import { charactersOperations } from '../../../../store/Characters';
import Loader from '../../../Shared/Loader';
import { ErrorMessage, LoaderWrapper, MainButton } from '../../../Shared/Styled';
import { useTranslation } from 'react-i18next';
import { Character, characterDetailsToRender } from '../../../../store/Characters/types';
import { Link } from 'react-router-dom';
import { linksConstants } from '../../../../config';

type CharacterDetailsProps = RouteComponentProps<{ id: string }> & {};

const CharacterDetails: FunctionComponent<CharacterDetailsProps> = ({ match }) => {
  const { t } = useTranslation();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await charactersOperations.getCharacterDetails(match.params.id);
        setCharacter(result);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const goBack = (
    <Link to={linksConstants.CHARACTERS.INDEX}>
      <GoBackButton>&lt; {t('common.back')}</GoBackButton>
    </Link>
  );

  if (loading) {
    return (
      <Container>
        {goBack}
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      </Container>
    );
  }
  if (error || !character) {
    return (
      <Container>
        {goBack}
        <ErrorMessage>{t('common.errorOccurred')}</ErrorMessage>
      </Container>
    );
  }

  return (
    <Container>
      {goBack}
      {character && (
        <DetailsWrapper>
          {characterDetailsToRender.map((param) => (
            <Parameter key={param}>
              {t(`pages.characterDetails.${param}`)}: {character[param]}
            </Parameter>
          ))}
        </DetailsWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 3em 1em;
  position: relative;
`;

const Parameter = styled.div`
  padding: 0.6em 0;
`;

const DetailsWrapper = styled.div`
  padding: 2em;
`;

const GoBackButton = styled(MainButton)`
  background-color: ${(props) => props.theme.colors.backgrounds.secondary};
  border: 1px solid ${(props) => props.theme.colors.backgrounds.primary};
  width: 100%;
`;

export default CharacterDetails;
