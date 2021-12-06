import React, { useState, useEffect } from 'react';
import {
  FormLabel,
  FormControl,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import axios from 'axios';
import { useSnack } from '../context/useSnack';

interface Prop {
  setCategoryId : any
}

const BidsCategoriesSelect: React.FC<Prop> = ({ setCategoryId }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [categories, setCategories] = useState([]);

  const { showSnack } = useSnack();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) : void => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    const myAbortController = new AbortController();
    async function fetchCategories(): Promise<void> {
      try {
        const data = await axios.get('/api/categories', { signal: myAbortController.signal });
        setCategories(data.data.categoriesData);
      } catch (err: any) {
        if (!err.constructor.name) {
          showSnack(err.response.data.message, 'error');
        }
      }
    }
    fetchCategories();
    return () => {
      myAbortController.abort();
    };
  }, []);

  return (
    <FormControl component="fieldset" className="filter-container">
      <FormLabel className="filter-title">Categories</FormLabel>
      <List aria-label="main mailbox folders" className="list-container">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => {
            handleListItemClick(event, 0);
            setCategoryId(undefined);
          }}
        >
          <ListItemText primary="All" />
        </ListItemButton>
        {categories.length
          ? categories.map((item: any, i) => (
            <ListItemButton
              selected={selectedIndex === i + 1}
              onClick={(event) => {
                handleListItemClick(event, i + 1);
                setCategoryId(item.id);
              }}
            >
              <ListItemText
                key={item.name}
                primary={item.name}
              />
            </ListItemButton>
          )) : null}
      </List>
    </FormControl>
  );
};

export default BidsCategoriesSelect;
