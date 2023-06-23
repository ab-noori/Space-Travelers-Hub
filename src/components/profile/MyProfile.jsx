import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionsSlice';
import './MyProfile.scss';

const MyProfile = () => {
  const dispatch = useDispatch();
  const { missions, reservedMissions } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const reservedMissionsList = missions.filter((mission) => {
    const res = reservedMissions.includes(mission.mission_id);
    return res;
  });

  return (
    <div>
      <h2>My Joint Missions</h2>
      <ul className="joint-missions-list">
        {reservedMissionsList.map((mission) => (
          <li key={mission.mission_id}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyProfile;
