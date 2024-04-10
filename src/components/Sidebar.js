// Navbar.js
import React, { useState } from 'react';
import { LeftCircleOutlined, HomeOutlined, ClockCircleOutlined, BarChartOutlined,RocketOutlined,DatabaseOutlined,SettingOutlined,LogoutOutlined} from '@ant-design/icons'; // Import necessary icons
import './Sidebar.css';
import CatalixLogo from '../images/catalix1.png'; // Import the Catalix logo image

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
    <button className="toggle-button" onClick={toggleSidebar}>
      <LeftCircleOutlined className="icon" style={{ backgroundColor: '#2F667F', color: 'white', border: 'none' }} />
    </button>
    <div className="logo-wrapper">
      <img src={CatalixLogo} alt="Catalix Logo" className="logo" />
      <span className="logo-text">Catalix</span>
    </div>
    <ul>
    <li onClick={() => scrollToSection('home-section')}>
          <HomeOutlined /><span className="sidebar-item-text">Home</span>
        </li>
        <li onClick={() => scrollToSection('activities-section')}>
          <ClockCircleOutlined /><span className="sidebar-item-text">Activities</span>
        </li>
        <li onClick={() => scrollToSection('analytics-section')}>
          <BarChartOutlined /><span className="sidebar-item-text">Analytics</span>
        </li>
        <li onClick={() => scrollToSection('transformation-section')}>
          <RocketOutlined /><span className="sidebar-item-text">Transformation</span>
        </li>
        <li onClick={() => scrollToSection('library-section')}>
          <DatabaseOutlined /><span className="sidebar-item-text">Library</span>
        </li>
      </ul>
      <div className="horizontal-line"></div>
      <ul>
      <li onClick={() => scrollToSection('transformation-section')}>
      <SettingOutlined /><span className="sidebar-item-text">Settings</span>
        </li>
        <li onClick={() => scrollToSection('library-section')}>
        <LogoutOutlined /><span className="sidebar-item-text">Logout</span>
        </li>
      </ul>
  </div>
  );
};

export default Navbar;
