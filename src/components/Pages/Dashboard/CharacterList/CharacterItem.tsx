import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Character } from '../../../../store/Characters/types';
import { Link } from 'react-router-dom';
import { extractCharacterIdFromUrl } from '../../../../utils/extractCharacterIdFromUrl';

type CharacterItemProps = {
  character: Character;
};

const CharacterItem: FunctionComponent<CharacterItemProps> = ({ character }) => {
  return (
    <Container>
      <Link to={`/character/${extractCharacterIdFromUrl(character.url)}`}>{character.name}</Link>
    </Container>
  );
};

const Container = styled.div`
  padding: 1em;
  color: ${(props) => props.theme.colors.fonts.secondary};
  text-decoration: none;
`;

export default CharacterItem;
