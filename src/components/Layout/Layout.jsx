import { Outlet } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import './layout.scss';

const Layout = () => (
  <div className="layout-container">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
