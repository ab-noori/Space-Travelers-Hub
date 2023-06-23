import PropTypes from 'prop-types';

import './rocketProfile.scss';

const RocketProfile = ({ rocket }) => (
  <li className="rockets-reserved">
    {rocket.rocketName}
  </li>
);

RocketProfile.propTypes = {
  rocket: PropTypes.shape({
    rocketName: PropTypes.string,
    rocketDescription: PropTypes.string,
    reserved: PropTypes.bool,
    flickrImages: PropTypes.arrayOf(PropTypes.string),
    id: PropTypes.string,
  }).isRequired,
};

export default RocketProfile;
