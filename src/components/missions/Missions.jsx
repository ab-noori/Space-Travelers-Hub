import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionsSlice';
import './Missions.scss';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      <table className="striped-table">
        <thead>
          <tr>
            <th className="nowrap">Mission Name</th>
            <th className="nowrap">Description</th>
            <th className="nowrap">Status</th>
            <th className="nowrap">Actions</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission, index) => (
            <tr key={mission.id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td className="bold">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="button-cell">
                {/* Status value goes here */}
                <button type="button">Not Member</button>
              </td>
              <td className="button-cell">
                {/* Action buttons go here */}
                <button type="button">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
