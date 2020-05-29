import { AppTheme } from '../../config/themes/themes';

export type AppState = {
  theme: AppTheme;
};
export type SwitchSidesAction = {
  type: AppActionsConstants.SWITCH_SIDES;
};

export enum AppActionsConstants {
  SWITCH_SIDES = 'SWITCH_SIDES'
}

export type AppActionType = SwitchSidesAction;
