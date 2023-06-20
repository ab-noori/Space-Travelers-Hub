import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import './App.scss';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <main>
        <Router>
          <Routes>
            <Route path="/Space-Travelers-Hub/" element={<Layout />} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
