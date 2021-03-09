import { Grid,Card,CardActionArea,CardMedia,CardContent,Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ShowEvents.css';
const ShowEvents = ({ data, myColor }) => {
  const [user,setUser]=useContext(UserContext)
  const history = useHistory()
  const { name, img, } = data;
  const handleCard = () => {
    setUser({...user, event:data})
    history.push('/register-form')
  }
  return (
    <Grid item md={3} sm={6} xs={12}>
    
    <Card  style={{background: myColor, borderRadius:'10px'}}>
      <CardActionArea >
        <CardMedia onClick={handleCard}
          component="img"
          alt="Contemplative Reptile"
          height='200'
            image={img}
            title="Contemplative Reptile"
        />
        <CardContent style={{color:'white'}}>
          <Typography gutterBottom >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     
    </Grid>
  );
};

export default ShowEvents;