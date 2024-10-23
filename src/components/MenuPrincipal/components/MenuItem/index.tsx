import './index.css';

import { Link } from 'react-router-dom';
import { SvgIconComponent } from '@mui/icons-material';
import { Typography } from '@mui/material';

interface MenuItemProps {
  title?: string;
  to: string;
  Icon: SvgIconComponent;
  id?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, title, to, Icon }) => {
  return (
      <Link id={"menu" + id} to={to} className='menuLinkContainer'>
          <Icon />
          <Typography fontFamily={'poppins'} variant={'h6'}>{title}</Typography>
      </Link>
  );
};

export default MenuItem;