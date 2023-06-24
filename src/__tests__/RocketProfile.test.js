import React from 'react';
import renderer from 'react-test-renderer';
import RocketProfile from '../components/profile/rockets/RocketProfile';

describe('RocketProfile', () => {
  it('renders correctly', () => {
    const rocket = {
      rocketName: 'Falcon 9',
      rocketDescription: 'A two-stage rocket...',
      reserved: true,
      flickrImages: ['url1', 'url2'],
      id: 'rocket1',
    };

    const rocketProfile = renderer.create(<RocketProfile rocket={rocket} />).toJSON();

    expect(rocketProfile).toMatchSnapshot();
  });
});
