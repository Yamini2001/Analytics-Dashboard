import React, { useState } from 'react';
import { Input,Avatar} from 'antd';
import { SearchOutlined, BellOutlined, MessageOutlined, UserOutlined, CloseCircleOutlined, SettingOutlined } from '@ant-design/icons';

import './Header.css'; // Import your CSS file

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const [showBellNotificationDot, setShowBellNotificationDot] = useState(true); // Set to true to display bell notification dot
  const [showMessageNotificationDot, setShowMessageNotificationDot] = useState(true); // Set to true to display message notification dot

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchValue('');
  };

  return (
    <div className="header">
      <div className="search-bar">
        <Input
          placeholder="Search by profile, setting, artifact, etc..."
          prefix={<span style={{ color: '#99C3D5' }}><SearchOutlined /></span>}
          suffix={<CloseCircleOutlined className="icon" onClick={handleClearSearch} style={{margin:'-3px',color:'#99C3D5'}}/>}
          value={searchValue}
          onChange={handleSearchChange}
        />
        <div className="search-bar-text">Search</div>
      </div>
      <div className="icons">
        <BellOutlined className="icon icon-background" />
        {showBellNotificationDot && <div className="notification-dot"></div>}
        <MessageOutlined className="icon icon-background" />
        {showMessageNotificationDot && <div className="notification-dot"></div>}
        <SettingOutlined className="icon icon-background" />
        <Avatar size={34} icon={<UserOutlined />} src="../images/Yamini.png" /> {/* Provide the path to the image */}
      </div>
</div>
  );
};

export default Header;
