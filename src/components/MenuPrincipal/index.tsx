import './index.css';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
////import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonIcon from '@mui/icons-material/Person';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CreateIcon from '@mui/icons-material/Create';

import MenuItem from './components/MenuItem';

const menuItems = [
  { id: "Pesquisa", title: 'Pesquisa', to: '/pesquisa', Icon: SearchIcon },
  { id: "Notificacoes", title: 'Notificações', to: '/notificacoes', Icon: NotificationsIcon },
  { id: "Postagem", title: 'Publicar postagem', to: '/nova-postagem', Icon: CreateIcon },
  { id: "Perfil", title: 'Meu Perfil', to: '/perfil', Icon: PersonIcon },
  { id: "Editais", title: 'Dicas e Informações sobre Editais', to: '/editais', Icon: LightbulbIcon },

];

const MenuPrincipal: React.FC = () => {
  return (
    <nav className='containerMenuPrincipal'>
      {menuItems.map((item, index) => (
        <MenuItem id={item.id} key={index} title={item.title} to={item.to} Icon={item.Icon} />
      ))}
    </nav>
  );
};

export default MenuPrincipal;
