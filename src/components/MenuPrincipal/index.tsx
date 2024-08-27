import './index.css';

// Icons
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import WorkIcon from '@mui/icons-material/Work';
import HelpIcon from '@mui/icons-material/Help';

import MenuItem from './components/MenuItem';

const menuItems = [
  { title: 'Home', to: '/', Icon: HomeIcon },
  { title: 'About', to: '/about', Icon: InfoIcon },
  { title: 'Contact', to: '/contact', Icon: ContactMailIcon },
  { title: 'Projects', to: '/projects', Icon: WorkIcon },
  { title: 'Help', to: '/help', Icon: HelpIcon },
];

const MenuPrincipal: React.FC = () => {
  return (
    <nav className='containerMenuPrincipal'>
      {menuItems.map((item, index) => (
        <MenuItem key={index} title={item.title} to={item.to} Icon={item.Icon} />
      ))}
    </nav>
  );
};

export default MenuPrincipal;
