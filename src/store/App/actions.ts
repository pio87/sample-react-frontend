import { AppActionsConstants, SwitchSidesAction } from './types';

export const switchSides = (): SwitchSidesAction => ({
  type: AppActionsConstants.SWITCH_SIDES
});
