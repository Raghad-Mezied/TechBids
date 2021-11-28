import React from 'react';
import Typography from '@mui/material/Typography';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import './style.css';
import { createSvgIcon } from '@mui/material/utils';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import drone from './droneBackground.jpg';
import charger from './chargerBackground.jpg';
import headphone from './headphoneBackground.jpg';
import laptop from './labtopBackground.jpg';
import Shipping from './Vector.svg';

function srcset(image: string, width: number, height: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width}&h=${height}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width}&h=${
      height
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const itemData = [
  {
    img: headphone,
    title: 'Mushrooms',
  },
  {
    img: charger,
    title: 'Tomato basil',
  },
  {
    img: drone,
    title: 'Sea star',
  },
  {
    img: laptop,
    title: 'Bike',
    featured: true,
  },
];

const Header: React.FC = () => (
  <div>
    <div className="cards-container">
      <div className="card-container">
        <div className="content-container">
          <Typography variant="h5" component="div">
            Fastest Delivery
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Efficiently unleash media
          </Typography>
        </div>
      </div>
      <div className="card-container">
        <HeadsetMicIcon />
        <div className="content-container">
          <Typography variant="h5" component="div">
            Instant Buying
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Podcasting operational
          </Typography>
        </div>
      </div>
      <div className="card-container">
        <HeadsetMicIcon />
        <div className="content-container">
          <Typography variant="h5" component="div">
            Call Center
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Completely synergize
          </Typography>
        </div>
      </div>
    </div>

    <ImageList sx={{ width: 500, height: 450, margin: '5vh auto' }} variant="masonry" cols={2} gap={0}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    {/* <ImageList
      sx={{
        width: '80%',
        margin: '3vh auto',
        transform: 'translateZ(0)',
      }}
      rowHeight="auto"
      cols={2}
      gap={0}
    >
      <ImageListItem cols={1.8} rows={1}>
        <img
          src={drone}
        //   alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={drone}

        //   alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={drone}
        //   alt={item.title}
          loading="lazy"
        />
      </ImageListItem>
      <ImageListItem>
        <img
          src={drone}
          width={400}
        //   alt={item.title}
          loading="lazy"
        />
      </ImageListItem>

    </ImageList> */}

  </div>
);

export default Header;
