import { Outlet } from 'react-router-dom';

import Navbar from './navbar/Navbar';
import './layout.css';

const Layout = () => (
  <div className="layout-container">
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
