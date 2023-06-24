import PropTypes from 'prop-types';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './RocketItem.scss';
import { cancelReserved, reserveRocket } from '../../redux/rockets/rocketsSlice';

const RocketItem = ({ rocketItem }) => {
  const dispatch = useDispatch();

  const handleReseveRocket = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancelReserve = (id) => {
    dispatch(cancelReserved(id));
  };

  if (!rocketItem) {
    return (
      <div>No Rocket</div>
    );
  }

  return (
    <div className="rocket-container">
      <img src={rocketItem.flickrImages[0]} alt="Rocket" className="rocket-image" />
      <div className="rocket-info">
        <div className="rocket-title">{rocketItem.rocketName}</div>
        <div className="rocket-description">
          {rocketItem?.reserved && <button type="button" className="reserved">reserved</button> }
          {rocketItem.rocketDescription}
        </div>
        {rocketItem?.reserved
          ? (
            <button type="button" className="cancel-reservation" onClick={() => handleCancelReserve(rocketItem.id)}>
              Cancel Reservation
            </button>
          )
          : (
            <button type="button" className="reserve-button" onClick={() => handleReseveRocket(rocketItem.id)}>
              Reserve Rocket
            </button>
          )}
      </div>
    </div>
  );
};

RocketItem.propTypes = {
  rocketItem: PropTypes.shape({
    rocketName: PropTypes.string,
    rocketDescription: PropTypes.string,
    reserved: PropTypes.bool,
    flickrImages: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
  }).isRequired,
};

export default RocketItem;
