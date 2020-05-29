import React from 'react';
import * as Redux from 'react-redux';
import * as enzyme from 'enzyme';
import DashboardPage from '../../../../src/components/Pages/Dashboard/DashboardPage';
import { linksConstants } from '../../../../src/config';

describe('DashboardPage', () => {
  let useSelectorSpy: jest.SpyInstance;

  beforeEach(() => {
    useSelectorSpy = jest.spyOn(Redux, 'useSelector');
    useSelectorSpy.mockReturnValue({});
  });

  it('Should render Gif, Routing and Footer sections', () => {
    const wrapper = enzyme.shallow(<DashboardPage />);
    expect(wrapper.find('DashboardGif').exists()).toBe(true);
    expect(wrapper.find('Switch').exists()).toBe(true);
    expect(wrapper.find('Footer').exists()).toBe(true);
  });

  it('Should redirect to characters index page by default', () => {
    const wrapper = enzyme.shallow(<DashboardPage />);
    expect(wrapper.find('Redirect').prop('to')).toBe(linksConstants.CHARACTERS.INDEX);
  });
});
