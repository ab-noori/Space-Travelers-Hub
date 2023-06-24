import React from 'react';
import { useSelector } from 'react-redux';

import './MyProfile.scss';
import MissionProfile from './missions/MissionProfile';
import RocketProfile from './rockets/RocketProfile';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);
  // console.log(rockets)
  const rocketsStatus = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      {/* show missions on profile page */}
      <section className="mission-container">
        <div className="title">
          My Missions
        </div>
        <MissionProfile />
      </section>

      {/* show rockets on profile page */}
      <section className="rockets-container">
        <div className="title">
          My Rockets
        </div>
        {rocketsStatus.length === 0 ? (
          <p>You have not reserved any rocket.</p>
        ) : (rocketsStatus.length > 0 && (
          <ul className="reserved-rocket-list">
            {rocketsStatus.map((rocket) => (
              <RocketProfile key={rocket.id} rocket={rocket} />
            ))}
          </ul>
        ))}
      </section>
    </div>
  );
};

export default MyProfile;
