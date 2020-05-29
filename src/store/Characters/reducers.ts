import { CharactersActionsConstants, CharactersActionType, CharactersState } from './types';
import update from 'immutability-helper';

const initialState: CharactersState = {
  searchValue: '',
  data: [],
  loading: false,
  error: null,
  pagination: {
    totalPages: 1,
    page: 1,
    per: 10
  }
};

export default function appReducer(state = initialState, action: CharactersActionType) {
  switch (action.type) {
    case CharactersActionsConstants.GET_CHARACTERS_BEGIN:
      return update(state, {
        loading: { $set: true },
        error: { $set: null }
      });

    case CharactersActionsConstants.GET_CHARACTERS_FAILED:
      return update(state, {
        loading: { $set: false },
        error: { $set: action.payload.error?.message || 'Please try again...' }
      });

    case CharactersActionsConstants.GET_CHARACTERS_SUCCESS:
      return update(state, {
        loading: { $set: false },
        error: { $set: null },
        data: { $set: action.payload.response.results },
        pagination: {
          totalPages: { $set: Math.ceil(action.payload.response.count / state.pagination.per) },
          page: { $set: action.payload.page }
        }
      });

    case CharactersActionsConstants.SET_ACTIVE_PAGE:
      return update(state, {
        pagination: {
          page: { $set: action.payload }
        }
      });

    case CharactersActionsConstants.SEARCH_VALUE_CHANGE:
      return update(state, {
        searchValue: { $set: action.payload }
      });

    default: {
      return state;
    }
  }
}
