import {
  Box,
} from '@mui/material';
import { TimerCell } from './TimerCell';
import { useTimer } from '../../../context/useTimer';

export const Timer = ({ futureDate } : any) : any => {
  const {
    days, hours, minutes, seconds, isTimeUp,
  } = useTimer(futureDate);
  const tickerContents = isTimeUp ? (
    <div>Time is up!!!</div>
  ) : (
    <>
      <TimerCell value={days} label="Days" />
      <TimerCell value={hours} label="Hours" />
      <TimerCell value={minutes} label="Minutes" />
      <TimerCell value={seconds} label="Seconds" />
    </>
  );

  return (
    <Box sx={{
      width: '90%',
      margin: '0 auto',
      padding: '0.5rem',
      color: 'white',
      backgroundColor: 'black',
      display: 'flex',
      justifyContent: 'space-between',
      borderRadius: '5px',
    }}
    >
      { tickerContents }
    </Box>
  );
};
