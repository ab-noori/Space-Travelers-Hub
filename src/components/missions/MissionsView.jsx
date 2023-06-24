import React from 'react';
import PropTypes from 'prop-types';
import './MissionsView.scss';

const MissionsView = ({
  missions, isLoading, error, handleJoinMission, handleLeaveMission,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

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
            <tr key={mission.mission_id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
              <td className="bold">{mission.mission_name}</td>
              <td>{mission.description}</td>
              <td className="button-cell">
                {mission.reserved ? (
                  <button type="button" className="active-member status-btn">
                    Active Member
                  </button>
                ) : (
                  <button type="button" className="not-member status-btn">
                    Not Member
                  </button>
                )}
              </td>
              <td className="button-cell">
                {mission.reserved ? (
                  <button type="button" className="leave-mission action-btn" onClick={() => handleLeaveMission(mission.mission_id)}>
                    Leave Mission
                  </button>
                ) : (
                  <button
                    type="button"
                    className="join-mission action-btn"
                    onClick={() => handleJoinMission(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

MissionsView.propTypes = {
  missions: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.number.isRequired,
      mission_name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      reserved: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleJoinMission: PropTypes.func.isRequired,
  handleLeaveMission: PropTypes.func.isRequired,
};

MissionsView.defaultProps = {
  error: null,
};

export default MissionsView;
