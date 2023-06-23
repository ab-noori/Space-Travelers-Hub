import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.scss';
import Layout from './components/Layout/Layout';
import { fetchRockets } from './redux/rockets/rocketsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
