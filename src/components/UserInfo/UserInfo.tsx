import React from 'react';
import './UserInfo.css';
import Button from '../Button';

interface UserInfoProps {
  imgSrc: string;
  name: string;
  onLogout: () => void;
}

function UserInfo({ imgSrc, name, onLogout }: UserInfoProps) {
  return (
    <div className="user-info-container">
      <img className="avatar" src={imgSrc} alt="" />
      <span className="user-info-name">{name}</span>
      <Button variant="outline" onClick={onLogout}>
        Logout
      </Button>
    </div>
  );
}

export default UserInfo;
