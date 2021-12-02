import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Style.css';

const HistoryProduct : React.FC = () => {
  const { id } = useParams();
  const [history, setHistory] = useState([{
    date: '',
    amount: '',
  }]);
  useEffect(() => {
    const source = axios.CancelToken.source();

    const getHsitory = async (): Promise<any> => {
      try {
        const result = await axios.get(`/api/product/${id}/history`);
        console.log(result.data.data);
        if (result && result.data) {
          setHistory(result.data.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getHsitory();

    return () => {
      source.cancel();
    };
  });
  return (
    <div className="conatiner-table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Date</TableCell>
              <TableCell align="center">Bid</TableCell>
              <TableCell align="center">User</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {history.map((row):any => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" className="date-space" align="center">{row.date}</TableCell>
                <TableCell align="center" className="date-space">{row.amount}</TableCell>
                <TableCell align="center" className="date-space">user</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default HistoryProduct;
