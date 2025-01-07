import { Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface LoadingProps {
    text: string
} 

const Loading: React.FC<LoadingProps> = ({text}) => {
    return <>
    <CircularProgress />
    <Typography fontFamily='poppins' fontSize={20}>{text}</Typography>
    </>
}

export default Loading;