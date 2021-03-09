import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import ShowEvents from '../ShowEvents/ShowEvents';
import loading from './150x150.gif'
const Body = () => {
  const [event, setEvent] = useState([])
  useEffect( () => {
    async function fetchApi() {
      let response = await fetch('https://quiet-badlands-35589.herokuapp.com/all-event')
      response = await response.json()
      setEvent(response)
   }
     fetchApi() 
  },[])
  return (
    <div className="container">
      <Grid container spacing={2} justify="center" >
        {
          event.length > 0?
          event.map(data => {
            let colors = ['#3F90FC', '#FFBD3E', '#FF7044', '#cc6fb5e0','#6c757d','#3f51b5'];
            const random = Math.floor(Math.random() * 6)
            return (
              <ShowEvents key={data._id} data={data} myColor={ colors[random]}/>
            )
          }) :<img src={loading} alt=""/>
        }
      </Grid>
   </div>
  );
};

export default Body;