import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import { Barnav } from './components/Barnav';
import Bow from './components/Bow';
import ChaosDotBow from './components/ChaosDotBow';

const App: React.FC = () => {
  return (
    <Router>
      <Barnav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/bow" element={<Bow />}>
          {/* Route pour /bow */}
        </Route>
        {/* Route pour /bow/chaosdotbow */}
        <Route path="/bow/chaosdotbow" element={<ChaosDotBow />} />
      </Routes>
    </Router>
  );
}

export default App;
