import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../../redux/missions/missionsSlice';
import MissionsView from './MissionsView';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, isLoading, error } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  const handleLeaveMission = (missionId) => {
    dispatch(leaveMission(missionId));
  };
  return (
    <MissionsView
      missions={missions}
      isLoading={isLoading}
      error={error}
      handleJoinMission={handleJoinMission}
      handleLeaveMission={handleLeaveMission}
    />
  );
};

export default Missions;
