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
  reservedMissions: [],
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, { payload }) => {
      state.reservedMissions.push(payload); // Add mission ID to reservedMissions array
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    },
    leaveMission: (state, { payload }) => {
      // remove a mission ID from reservedMissions array
      state.reservedMissions = state.reservedMissions.filter((missionId) => missionId !== payload);
      state.missions = state.missions.map((mission) => {
        if (mission.mission_id === payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const result = payload.map((mission) => ({
          mission_id: mission.mission_id,
          mission_name: mission.mission_name,
          description: mission.description,
          reserved: state.reservedMissions.includes(mission.mission_id),
        }));
        state.missions = result;
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;
