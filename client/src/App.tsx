import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import TestPage from './components/TestPage';
import { Barnav } from './components/Barnav';
import Bow from './components/Bow';
import ChaosDotBow from './components/ChaosDotBow';
import Bossprofit from './components/Bossprofit';
import Shaper from './components/Shaper';

const App: React.FC = () => {
  return (
    <Router>
      <Barnav />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/bow" element={<Bow />}>
        </Route>
        <Route path="/bow/chaosdotbow" element={<ChaosDotBow />} />
        <Route path="/bossprofit" element={<Bossprofit />}></Route>
        <Route path="/bossprofit/shaper" element={<Shaper />} />
      </Routes>
    </Router>
  );
}

export default App;
