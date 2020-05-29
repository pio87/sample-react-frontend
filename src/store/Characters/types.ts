export type CharactersState = {
  searchValue: string;
  data: Character[];
  loading: boolean;
  error: string | null;
  pagination: {
    totalPages: number;
    page: number;
    per: number;
  };
};

export type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
};

export const characterDetailsToRender = [
  'name',
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender'
] as const;

export type CharacterDetailsToRender = typeof characterDetailsToRender[number];

export type SetActivePageAction = {
  type: CharactersActionsConstants.SET_ACTIVE_PAGE;
  payload: number;
};
export type SearchInputValueChangeAction = {
  type: CharactersActionsConstants.SEARCH_VALUE_CHANGE;
  payload: string;
};

export type GetCharactersActionBEGIN = {
  type: CharactersActionsConstants.GET_CHARACTERS_BEGIN;
};
export type GetCharactersActionSUCCESS = {
  type: CharactersActionsConstants.GET_CHARACTERS_SUCCESS;
  payload: {
    response: GetCharactersResponse;
    page: number;
  };
};
export type GetCharactersActionFAILED = {
  type: CharactersActionsConstants.GET_CHARACTERS_FAILED;
  payload: {
    error: any;
  };
};

export type GetCharactersResponse = {
  results: Character[];
  count: number;
  next: string | null;
  previous: string | null;
};

export type GetCharacterDetailsResponse = Character;

export enum CharactersActionsConstants {
  SEARCH_VALUE_CHANGE = 'CHARACTERS/SEARCH_VALUE_CHANGE',
  SET_ACTIVE_PAGE = 'CHARACTERS/SET_ACTIVE_PAGE',
  GET_CHARACTERS_BEGIN = 'CHARACTERS/GET_CHARACTERS_BEGIN',
  GET_CHARACTERS_SUCCESS = 'CHARACTERS/GET_CHARACTERS_SUCCESS',
  GET_CHARACTERS_FAILED = 'CHARACTERS/GET_CHARACTERS_FAILED'
}

export type CharactersActionType =
  | SearchInputValueChangeAction
  | SetActivePageAction
  | GetCharactersActionBEGIN
  | GetCharactersActionSUCCESS
  | GetCharactersActionFAILED;
