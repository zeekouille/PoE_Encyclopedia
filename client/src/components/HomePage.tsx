import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <h2>Navigation</h2>
        <ul>
          <li>
            <a href="#crafting">Crafting</a>
            <ul>
              <li><a href="/bow/chaosdotbow" className="sub-link">Chaos Dot Bow</a></li>
            </ul>
          </li>
          <li className="separator"></li>
          <li>
            <a href="#boss-profit">Boss Profit</a>
            <ul>
              <li><a href="/bossprofit/shaper" className="sub-link">Shaper</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <section id="crafting">
          <h1>Crafting</h1>
          <p>Contenu pour la section crafting...</p>
          <section id="tsbow">
            <h2>TSBOW</h2>
            <p>Contenu pour la section TSBOW...</p>
          </section>
        </section>
        <section id="boss-profit">
          <h1>Boss Profit</h1>
          <p>Contenu pour la section boss profit...</p>
          <section id="shaper">
            <h2>Shaper</h2>
            <p>Contenu pour la section shaper...</p>
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
