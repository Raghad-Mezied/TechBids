import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GavelIcon from '@mui/icons-material/Gavel';
import './Style.css';

const ProductDetails : React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState(
    {
      name: '',
      auc_start_amount: '',
      auc_inc_amount: '',
      end_date: '',

      description: '',
      is_open: true,
      is_used: false,
    },
  );

  useEffect(() => {
    const source = axios.CancelToken.source();

    const getProduct = async (): Promise<any> => {
      try {
        const result = await axios.get(`/api/product/${id}`);
        console.log(result.data.data);
        if (result && result.data) {
          setData(result.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();

    return () => {
      source.cancel();
    };
  });
  return (
    <div>
      <div>
        <Typography sx={{
          fontSize: '30px', fontWeight: 'bold', paddingLeft: '15%', paddingBottom: '15px',
        }}
        >
          {data.name}
        </Typography>
      </div>
      <div className="product-container">
        <div className="product-image">
          <img src="data:image/jpeg;base64,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" alt="dd" className="img-pro" />
        </div>
        <div className="card-product">
          <Card sx={{ minWidth: 275, width: '80%', paddingLeft: '50px' }}>
            <CardContent>
              <div className="price">
                <Typography sx={{ fontSize: '24px', fontWeight: 'bold', paddingTop: '10px' }} gutterBottom className="current-bid">
                  Current Bid :
                  {' '}
                  {data.auc_start_amount}
                  {' '}
                  $
                </Typography>
                <CardActions>
                  <Button
                    className="open-btn"
                    size="small"
                  >
                    {!data.is_open ? 'open' : 'close'}

                  </Button>
                </CardActions>
              </div>
              <Typography className="date">
                Owner :user

              </Typography>

              <Typography variant="body2" className="date">
                Time Left :

              </Typography>
              <Typography className="date">
                Auction ends:
                {' '}
                {data.end_date}
              </Typography>
              <div className="price">

                <CardActions>
                  <Button size="small" className="icon-btn">
                    {' '}
                    {' '}
                    +
                    {' '}
                    {data.auc_inc_amount}
                    {' '}
                    <GavelIcon />

                  </Button>
                </CardActions>
              </div>
            </CardContent>
            <Typography className="date">
              item Condition :
              {' '}
              {data.is_used ? 'Used' : 'Not Used'}
            </Typography>
            <Typography variant="body2" className="description-label">
              Description

            </Typography>
            <Typography variant="body2" className="description">
              {data.description}
            </Typography>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
