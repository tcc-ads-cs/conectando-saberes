import React from 'react';
import { Link } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';
import { Typography } from '@mui/material';
import './MenuItem.css';

interface MenuItemProps {
  title: string;
  to: string;
  Icon: SvgIconComponent;
}

const MenuItem: React.FC<MenuItemProps> = ({ title, to, Icon }) => {
  return (
      <Link to={to} className="botaoMenuPrincipal">
        <Icon style={{ marginRight: '10px' }} />
        <Typography>{title}</Typography>
      </Link>
  );
};

export default MenuItem;