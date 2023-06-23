import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../../redux/missions/missionsSlice';

const MissionProfile = () => {
  const dispatch = useDispatch();
  const { missions, reservedMissions } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const reservedList = missions.filter((mission) => reservedMissions.includes(mission.mission_id));

  return (
    <>
      {reservedList.length === 0 ? (
        <p>You have not joined any mission.</p>
      ) : (
        <ul className="joined-missions-list">
          {reservedList.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MissionProfile;
