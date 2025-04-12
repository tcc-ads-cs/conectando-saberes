import { Typography } from "@mui/material";
import ConstructionIcon from '@mui/icons-material/Construction';

const EmConstrucao: React.FC = () => {
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1em', color: '#2C0735' }}>
        <ConstructionIcon />
        <Typography fontFamily='poppins' fontSize={20}>Essa página ainda não está pronta :(</Typography>
    </div>
}

export default EmConstrucao;