import { Dispatch } from 'redux';
import { appActions } from './index';
import { ThemeName } from '../../config/themes/themes';

const switchSides = (activeTheme: ThemeName) => async (dispatch: Dispatch) => {
  dispatch(appActions.switchSides());
  localStorage.setItem('theme', activeTheme === 'light' ? 'dark' : 'light');
};

export default { switchSides };
