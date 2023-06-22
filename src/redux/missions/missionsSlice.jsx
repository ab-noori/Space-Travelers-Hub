import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await axios.get(URL);
  return response.data;
});

const initialState = {
  missions: [],
  isLoading: false,
  error: null,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const result = [];
        payload.map((mission) => {
          const newMission = {
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
          };
          return result.push(newMission);
        });
        state.missions = result;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default missionSlice.reducer;
