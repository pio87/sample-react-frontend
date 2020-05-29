import { Dispatch } from 'redux';
import { httpRequest } from '../../utils';
import { GetCharacterDetailsResponse, GetCharactersResponse } from './types';
import { charactersActions, charactersRequests } from './index';
import { ApplicationState } from '../rootReducer';

export const getCharacters = () => async (dispatch: Dispatch, getState: () => ApplicationState) => {
  dispatch(charactersActions.getCharactersBegin());
  try {
    const { pagination, searchValue } = getState().characters;

    const response = await httpRequest.runRequest<GetCharactersResponse>(
      charactersRequests.getCharacters({
        requestParams: {
          page: pagination.page,
          search: searchValue
        }
      })
    );
    dispatch(charactersActions.getCharactersSuccess(response, pagination.page));
  } catch (e) {
    dispatch(charactersActions.getCharactersFailed(e));
  }
};

export const getCharacterDetails = (id: string) => {
  return httpRequest.runRequest<GetCharacterDetailsResponse>(
    charactersRequests.getCharacterDetails({
      requestParams: {
        id
      }
    })
  );
};
