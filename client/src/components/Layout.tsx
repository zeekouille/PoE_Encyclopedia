// Layout.tsx
import React from 'react';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="App">
      <div className="sidebar">
      <h2 > <a href="/">Navigation</a></h2>
        <ul>
          <li>
            <a >Crafting</a>
            <ul>
              <li><a href="/bow/chaosdotbow" className="sub-link">Chaos Dot Bow</a></li>
            </ul>
          </li>
          <li className="separator"></li>
          <li>
            <a >Boss Profit</a>
            <ul>
              <li><a href="/bossprofit/shaper" className="sub-link">Shaper</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;
