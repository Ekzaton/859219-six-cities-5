import {RootState} from "../store";

export const selectIsDataSending = (state: RootState): boolean => state.favorite.isDataSending;
export const selectIsSendingError = (state: RootState): boolean => state.favorite.isSendingError;
