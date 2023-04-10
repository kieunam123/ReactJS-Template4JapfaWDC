import { Button } from '@mui/material'
import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import { Drawers, Header } from '../components'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        So luong don hang
      </Typography>
      <Typography variant="h5" component="div">
        Total Sales Order
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        100+
      </Typography>
      {/* <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}
    </CardContent>
    <CardActions>
      <Button size="small">Xem them</Button>
    </CardActions>
  </React.Fragment>
);

const card2 = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        So luong giao dich
      </Typography>
      <Typography variant="h5" component="div">
        Total Transaction
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        999+
      </Typography>
      {/* <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography> */}
    </CardContent>
    <CardActions>
      <Button size="small">Xem them</Button>
    </CardActions>
  </React.Fragment>
);

export default function Dashboard() {
  const navigate = useNavigate()
  const handleChangScreen = () => {
    navigate('/start')
  }
  const handleChangScreenReport = () => {
    navigate('/report')
  }
  return (
    <div>
      <Header title='JAPFA WDC' />
      <div style={{ marginTop: '10px', zIndex: -1, overflow: 'hidden' }}>
        <Drawers onPress={handleChangScreen} onPress2={handleChangScreenReport}  content={() => <>
        <div style={{flexDirection:'row'}}>
        {card}
        {card2}
        </div>
         
          <Button variant='outlined' onClick={handleChangScreen}>
            Sales Order
          </Button>
        </>} />

      </div>

    </div>
  )
}
