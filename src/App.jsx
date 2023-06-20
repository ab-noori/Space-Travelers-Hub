import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <main>
        <h1>Space Travelers Hub</h1>
        <Router>
          <Routes>
            <Route />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
