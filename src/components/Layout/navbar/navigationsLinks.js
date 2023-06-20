import { v4 as uuidv4 } from 'uuid';

const menuItems = [
  { id: uuidv4(), path: '/', text: 'Rockets' },
  { id: uuidv4(), path: 'missions', text: 'Missions' },
  { id: uuidv4(), path: 'profile', text: 'MyProfile' },
];

export default menuItems;
