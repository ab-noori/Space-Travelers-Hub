import React from 'react';
import { useSelector } from 'react-redux';

import '../MyProfile.scss';
import RocketProfile from './RocketProfile';

const MyProfile = () => {
  const { reservedRockets } = useSelector((store) => store.rockets);

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
        {reservedRockets.length > 0 && (
          <ul>
            {reservedRockets.map((rocket) => (
              <RocketProfile key={rocket.id} rocket={rocket} />
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default MyProfile;
