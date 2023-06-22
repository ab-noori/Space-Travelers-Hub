import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import RocketItem from '../../components/rockets/RocketItem';
import { fetchRockets } from '../../redux/rockets/rocketsSlice';
import './Rockets.scss';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets } = useSelector((store) => store.rockets);
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

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
