import { useSelector } from 'react-redux';

import RocketItem from '../../components/rockets/RocketItem';
import './Rockets.scss';

const Rockets = () => {
  const { rockets } = useSelector((store) => store.rockets);
  console.log(rockets);

  if (!rockets) {
    return <div>Rockets Loading...</div>;
  }

  return (
    <div className="all-rockets">
      {rockets.length > 0 ? (
        <ul className="each-rocket">
          {rockets.map((rocketItem) => (
            <RocketItem rocketItem={rocketItem} key={rocketItem.id} />
          ))}
        </ul>
      ) : 'No rockets' }
    </div>
  );
};

export default Rockets;
