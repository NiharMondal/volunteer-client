import { Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App'
import loading from './150x150.gif'
import Header from '../Home/Header/Header';
const Event = () => {
  const [user]=useContext(UserContext)
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/my-events', {
      method: 'get',
      headers: { 'content-type': 'application/json', email: user.email },
    })
      .then(res => res.json())
      .then(data => setEvents(data))
  },);
  const cancelEvent = (id) => {
    fetch('http://localhost:4000/cancel-event', {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ id: id })
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          const existingEvent = events.filter(data => data._id !== id)
          setEvents(existingEvent)
        };
      });
  }
  return (
    <>
      <Header/>
    <div className="container">
     <Grid container  justify='center' >
        {
          events.length>0?
        events.map(event=>{
          return(
             <Grid key={event._id} container item xs={10} sm={5} justify='space-around' 
              style={{boxShadow:'0px 2px 5px lightGray', borderRadius:'10px', width:'100%',margin:'10px'}}>
              <Grid item xs={10} md={5} style={{width:'50%'}}>
                <img style={{width:'100%', height:'180px'}} src={event.img} alt=""/>
              </Grid>
              <Grid item xs={10} md={5} style={{width:'50%', marginLeft:'15px'}}>
                <h3>{event.eventName}</h3>
                <h4>{event.date}</h4>
                <div style={{textAlign:'right', marginTop:'30px'}}>
                  <button onClick={()=>cancelEvent(event._id)} className='btn btn-danger'>
                    Cancel
                  </button>
                 </div>
               </Grid>
            </Grid>
          )
        }) :<img src={loading} alt=""/>
      }
      </Grid>
      </div>
     </>
  );
};

export default Event;