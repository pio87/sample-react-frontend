import {
  CharactersActionsConstants,
  GetCharactersActionBEGIN,
  GetCharactersActionFAILED,
  GetCharactersActionSUCCESS,
  GetCharactersResponse,
  SearchInputValueChangeAction,
  SetActivePageAction
} from './types';

export const getCharactersBegin = (): GetCharactersActionBEGIN => ({
  type: CharactersActionsConstants.GET_CHARACTERS_BEGIN
});

export const getCharactersSuccess = (response: GetCharactersResponse, page: number): GetCharactersActionSUCCESS => ({
  type: CharactersActionsConstants.GET_CHARACTERS_SUCCESS,
  payload: {
    response,
    page
  }
});

export const getCharactersFailed = (error: any): GetCharactersActionFAILED => ({
  type: CharactersActionsConstants.GET_CHARACTERS_FAILED,
  payload: {
    error
  }
});

export const setActivePage = (page: number): SetActivePageAction => ({
  type: CharactersActionsConstants.SET_ACTIVE_PAGE,
  payload: page
});

export const onSearchInput = (value: string): SearchInputValueChangeAction => ({
  type: CharactersActionsConstants.SEARCH_VALUE_CHANGE,
  payload: value
});
