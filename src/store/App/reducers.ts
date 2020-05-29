import update from 'immutability-helper';
import { AppActionsConstants, AppActionType, AppState } from './types';
import { lightTheme, darkTheme } from '../../config/themes/themes';

const initialState: AppState = {
  theme: localStorage.getItem('theme') === 'light' ? lightTheme : darkTheme
};

export default function appReducer(state = initialState, action: AppActionType) {
  switch (action.type) {
    case AppActionsConstants.SWITCH_SIDES:
      return update(state, {
        theme: { $set: state.theme.name === 'light' ? darkTheme : lightTheme }
      });

    default: {
      return state;
    }
  }
}
