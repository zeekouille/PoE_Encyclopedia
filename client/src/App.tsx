import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Import HashRouter instead of BrowserRouter
import HomePage from "./components/HomePage";
import TestPage from "./components/TestPage";
import { Barnav } from "./components/Barnav";
import Bow from "./components/Bow";
import ChaosDotBow from "./components/ChaosDotBow";
import Bossprofit from "./components/Bossprofit";
import Shaper from "./components/Shaper";
import { DataProvider } from "./components/dataContext";
import ApiFetchedPrice from "./components/apiFetchedPrices";
import { Maven } from "./components/Maven";

const App: React.FC = () => {
  return (
    <DataProvider>
      <Router>
        <Barnav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/bow" element={<Bow />} />
          <Route path="/bow/chaosdotbow" element={<ChaosDotBow />} />
          <Route path="/bossprofit" element={<Bossprofit />} />
          <Route path="/bossprofit/shaper" element={<Shaper />} />
          <Route path="/bossprofit/maven" element={<Maven />} />
          <Route path="/apiFetchedPrice" element={<ApiFetchedPrice />} />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;
