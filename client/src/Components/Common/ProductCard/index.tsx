import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import {
  Box,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import HardwareIcon from '@mui/icons-material/Hardware';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Timer } from '../Timer';
// import { Link } from 'react-router-dom';

interface ProductCardProps{
    image: string,
    description : string,
    title: string,
    // href: string,
    price: number,
    closed: boolean,
    endTime: Date
}

const ProductCard : any = ({
  image, description, title, price, closed, endTime,
} : ProductCardProps) : any => (
  <Card sx={{ maxWidth: 345, marginBottom: '1.5rem' }}>
    {closed && (
    <Box sx={{
      color: 'white',
      backgroundColor: 'black',
      width: '5rem',
      textAlign: 'center',
      padding: '0.5rem',
      borderRadius: '5px',
      position: 'absolute',
      marginTop: '0.35rem',
      marginLeft: '0.35rem',
      fontSize: '0.7rem',
    }}
    >
      Ended Auction
    </Box>
    )}
    <CardMedia
      component="img"
      height="194"
      image={image}
      alt="product"
    />
    <CardContent>
      <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} variant="h4" component="div">
        {title}
        {closed ? (
          <RemoveRedEyeOutlinedIcon sx={{
            color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: '4px',
          }}
          />
        ) : (
          <HardwareIcon
            sx={{
              color: 'white', backgroundColor: 'black', borderRadius: '50%', padding: '4px',
            }}
          />
        )}
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        {closed ? 'Sold for :' : 'Current Bid :'}
        {' '}
        { price }
        {' '}
        $
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    {!closed
    && (
    <CardActions>
      <Timer futureDate={endTime} />
    </CardActions>
    )}
  </Card>
);

export default ProductCard;
