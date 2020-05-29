import React from 'react';
import * as enzyme from 'enzyme';
import CharacterDetails from '../../../../../src/components/Pages/Dashboard/CharacterDetails/CharacterDetails';
import { linksConstants } from '../../../../../src/config';
import { match } from 'react-router';
import { createLocation, createMemoryHistory } from 'history';

const path = `/character/:id`;

const matchObj: match<{ id: string }> = {
  isExact: false,
  path,
  url: path.replace(':id', '1'),
  params: { id: '1' }
};

const routeParams = {
  match: matchObj,
  history: createMemoryHistory(),
  location: createLocation(matchObj.url)
};

describe('CharacterDetails', () => {
  it('Renders go back button', () => {
    const wrapper = enzyme.shallow(<CharacterDetails {...routeParams} />);
    const goBackBtn = wrapper.find('Link');
    expect(goBackBtn.exists()).toBe(true);
    expect(goBackBtn.prop('to')).toBe(linksConstants.CHARACTERS.INDEX);
  });

  it('Renders only loader if data if not yet fetched', () => {
    const wrapper = enzyme.shallow(<CharacterDetails {...routeParams} />);
    const loader = wrapper.find('Loader');
    const detailsWrapper = wrapper.find('DetailsWrapper');
    expect(loader.exists()).toBe(true);
    expect(detailsWrapper.exists()).toBe(false);
  });

  /**
   * TODO: Write tests for:
   * - conditional rendering of components basing on state and fetching operation results
   */
});
