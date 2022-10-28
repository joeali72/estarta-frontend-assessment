import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { TLogger } from '@allTypes/logger.types';
import { AxiosError } from 'axios';

// Define a type for the slice state
interface ILoggerState {
  isLoading: boolean;
  isError: boolean;
  error: AxiosError | null;
  data: TLogger | undefined;
}

// Define the initial state using that type
const initialState: ILoggerState = {
  isLoading: false,
  isError: false,
  error: null,
  data: undefined,
};

export const loggerSlice = createSlice({
  name: 'logger',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    fetchLoggerStart: (state, action: PayloadAction<ILoggerState>) => {
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
      state.error = action.payload.error;
      state.data = action.payload.data;
    },
    fetchLoggerSuccess: (state, action: PayloadAction<ILoggerState>) => {
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
      state.error = action.payload.error;
      state.data = action.payload.data;
    },
    fetchLoggerFailed: (state, action: PayloadAction<ILoggerState>) => {
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
      state.error = action.payload.error;
      state.data = action.payload.data;
    },
  },
});

export const { fetchLoggerStart, fetchLoggerSuccess, fetchLoggerFailed } =
  loggerSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLogger = (state: RootState) => state.logger.data;

export default loggerSlice.reducer;
