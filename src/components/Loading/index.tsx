import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingProps {
    text: string
} 

const Loading: React.FC<LoadingProps> = ({text}) => {
    return <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1em' }}>
        <CircularProgress />
        <Typography fontFamily='poppins' fontSize={20}>{text}</Typography>
    </div>
}

export default Loading;