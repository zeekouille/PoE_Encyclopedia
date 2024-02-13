// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage'; // Importer le composant HomePage
import TestPage from './components/TestPage'; // Importer le composant TestPage
import { Barnav } from './components/Barnav';

const App: React.FC = () => {
  return (
    <Router>
      <Barnav />
     

      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
