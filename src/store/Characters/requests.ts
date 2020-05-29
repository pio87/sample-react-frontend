import { BaseSettings, RequestSettings } from '../../utils/httpRequest';

export const getCharacters = (settings: RequestSettings<{ page: number; search: string }, {}>): BaseSettings => ({
  query: {
    method: 'get',
    url: '/people/?page=:page&search=:search'
  },
  params: settings.requestParams
});

export const getCharacterDetails = (settings: RequestSettings<{ id: string }, {}>): BaseSettings => ({
  query: {
    method: 'get',
    url: '/people/:id/'
  },
  params: settings.requestParams
});
