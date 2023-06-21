import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

// create slice
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
});

export default rocketsSlice.reducer;
