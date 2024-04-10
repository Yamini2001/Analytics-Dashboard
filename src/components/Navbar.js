// Navbar.js
import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = () => {
  return (
 <div className="buttons-container">
  <div className="buttons">
    <Button icon={<PlusOutlined />} className="button" style={{color:'white',background:'#2F667F'}}>Create Report</Button>
   <Button className="button">Share this dashboard</Button>
    <Button className="button">Select Duration</Button>
   <Button className="button">Compare with Duration</Button>
  </div>
   
 </div> 
  );
};

export default Navbar;
