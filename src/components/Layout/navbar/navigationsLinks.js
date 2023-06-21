import { v4 as uuidv4 } from 'uuid';

const menuItems = [
  { id: uuidv4(), path: '/Space-Travelers-Hub/', text: 'Rockets' },
  { id: uuidv4(), path: '/Space-Travelers-Hub/missions', text: 'Missions' },
  { id: uuidv4(), path: '/Space-Travelers-Hub/profile', text: 'MyProfile' },
];

export default menuItems;
