import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="App">
      <div className="sidebar">
        <h2><Link to="/">Navigation</Link></h2>
        <ul>
          <li>
            <span>Crafting</span>
            <ul>
              <li><Link to="/bow/chaosdotbow" className="sub-link">Chaos Dot Bow</Link></li>
            </ul>
          </li>
          <li className="separator"></li>
          <li>
            <span>Boss Profit</span>
            <ul>
              <li><Link to="/bossprofit/shaper" className="sub-link">Shaper</Link></li>
            </ul>
            <ul>
              <li><Link to="/bossprofit/maven" className="sub-link">Maven</Link></li>
            </ul>
          </li>
          <li className="separator"></li>
          <li>
            <span>Api</span>
            <ul>
              <li><Link to="/apiFetchedPrice" className="sub-link">Currency</Link></li>
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
