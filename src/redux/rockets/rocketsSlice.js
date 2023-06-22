import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/rockets';

const initialState = {
  rockets: [],
  isLoading: false,
  error: null,
};

// fetch books from the books API
export const fetchRockets = createAsyncThunk('rockets/fetchRockes', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue('something went wrong');
  }
});

// create slice
const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserveRocket: (state, { payload }) => {
      const { rockets } = state;
      const updatedRockets = rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: true };
        }
        return rocket;
      });
      state.rockets = updatedRockets;
    },

    cancelReserved: (state, { payload }) => {
      const { rockets } = state;
      const updatedRockets = rockets.map((rocket) => {
        if (rocket.id === payload) {
          return { ...rocket, reserved: false };
        }
        return rocket;
      });
      state.rockets = updatedRockets;
    },
  },
  // handle states of promises
  extraReducers: (builder) => {
    builder
      // fetch books
      .addCase(fetchRockets.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRockets.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const result = [];

        payload.forEach((rocket) => {
          const newRocket = {
            id: rocket.id,
            rocketName: rocket.name,
            rocketDescription: rocket.description,
            flickrImages: rocket.flickr_images,
          };
          result.push(newRocket);
        });

        state.rockets = result;
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reserveRocket, cancelReserved } = rocketsSlice.actions;
export default rocketsSlice.reducer;
