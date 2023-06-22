import React from 'react';
import { useSelector } from 'react-redux';

import '../MyProfile.scss';
import RocketProfile from './RocketProfile';

const MyProfile = () => {
  const { rockets } = useSelector((store) => store.rockets);

  const rocketsStatus = rockets.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      {/* show missions on profile page */}
      <section className="mission-container">
        <div className="title">
          My Missions
        </div>
      </section>

      {/* show rockets on profile page */}
      <section className="rockets-container">
        <div className="title">
          My Rockets
        </div>
        {rocketsStatus.length > 0 && (
          <ul>
            {rocketsStatus.map((rocket) => (
              <RocketProfile key={rocket.id} rocket={rocket} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default MyProfile;
