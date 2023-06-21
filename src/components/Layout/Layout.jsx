// import { Outlet } from 'react-router-dom';
// import Navbar from './navbar/Navbar';
import PagesRoutes from './PageRoutes';
import './layout.scss';

const Layout = () => (
  <div className="layout-container">
    <PagesRoutes />
    {/* <Navbar /> */}
    {/* <Outlet /> */}
  </div>
);

export default Layout;
