import React from 'react';
import renderer from 'react-test-renderer';
import MissionsView from '../components/missions/MissionsView';

describe('MissionsView', () => {
  it('renders correctly', () => {
    const missions = [
      {
        mission_id: 1,
        mission_name: 'Mission 1',
        description: 'Mission 1 Description',
        reserved: true,
      },
      {
        mission_id: 2,
        mission_name: 'Mission 2',
        description: 'Mission 2 Description',
        reserved: false,
      },
    ];

    const isLoading = false;
    const error = null;
    const handleJoinMission = jest.fn();
    const handleLeaveMission = jest.fn();

    const tree = renderer
      .create(
        <MissionsView
          missions={missions}
          isLoading={isLoading}
          error={error}
          handleJoinMission={handleJoinMission}
          handleLeaveMission={handleLeaveMission}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
