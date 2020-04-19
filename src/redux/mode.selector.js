import { createSelector } from 'reselect';

const selectMode = state => state.mode;

export const selectCurrentMode = createSelector(
  [selectMode],
  state => state
)