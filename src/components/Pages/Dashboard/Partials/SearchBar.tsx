import React, { ChangeEvent, FunctionComponent, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { charactersActions, charactersOperations } from '../../../../store/Characters';
import { useTypedSelector } from '../../../../utils';
import { ReactComponent as SearchIcon } from '../../../../assets/search.svg';

const SearchBar: FunctionComponent<{}> = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const searchValue = useTypedSelector((state) => state.characters.searchValue);

  const launchSearch = () => {
    dispatch(charactersActions.setActivePage(1));
    dispatch(charactersOperations.getCharacters());
  };

  const onKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter') {
      launchSearch();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(charactersActions.onSearchInput(e.target.value));
  };

  return (
    <Container>
      <SearchInput
        value={searchValue}
        onChange={onChange}
        autoFocus
        type="text"
        placeholder={t('pages.characters.searchBarPlaceholder')}
      />
      <SearchButton onClick={launchSearch}>
        <SearchIcon />
      </SearchButton>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 1em;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SearchButton = styled.button`
  padding: 1em;
  background-color: ${(props) => props.theme.colors.backgrounds.primary};
  border: none;
  font-size: 0.9em;
  border-radius: 0 4px 4px 0;
`;

const SearchInput = styled.input`
  padding: 1em;
  border-radius: 4px 0 0 4px;
  border: none;
  font-size: 1em;
  flex-grow: 1;
  background-color: ${(props) => props.theme.colors.backgrounds.primary};
  color: ${(props) => props.theme.colors.fonts.primary};

  &:focus {
    outline: none;
  }
`;

export default SearchBar;
