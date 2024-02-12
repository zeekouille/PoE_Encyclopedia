// App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const TestPage: React.FC = () => {
  return (
    <div>
      <h1>Page de Test</h1>
      <p>Ceci est le contenu de la page de test.</p>
    </div>
  );
}

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Accueil</h1>
      <p>Ceci est la page d'accueil.</p>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
