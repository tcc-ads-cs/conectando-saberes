import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface NotFoundProps {
    text: string,
    link: string;
}

const NotFound: React.FC<NotFoundProps> = ({text, link}) => {
    return <>
        <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <SentimentVeryDissatisfiedIcon style={{ fontSize: '4rem', color: '#4E148C' }} />
        <Typography fontFamily="poppins" style={{ margin: '1rem 0', fontSize: '1.5rem', color: '#2C0735' }}>
          {text}
        </Typography>
        <Link
          to={link}
          style={{
            textDecoration: 'none',
            color: '#2196f3',
            fontSize: '1rem',
            fontWeight: 'bold',
            marginTop: '1rem',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#1976d2')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#2196f3')}
        >
          Voltar para página inicial
        </Link>
      </div>
    </>
}

export default NotFound;