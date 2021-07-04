import {RootState} from "../store";

export const selectIsDataSending = (state: RootState): boolean => state.review.isDataSending;
export const selectIsSendingError = (state: RootState): boolean => state.review.isSendingError;
