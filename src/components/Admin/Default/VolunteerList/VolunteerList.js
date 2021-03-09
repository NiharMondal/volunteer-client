import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './VolunteerList.css'
const headerStyle = {
  color: '#2be9e9',
  padding:'20px 0'
}

const VolunteerList = () => {
  const [volunteer, setVolunteer] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/all-volunteers")
      .then(res => res.json())
      .then(data => setVolunteer(data))
  }, []);

  const removeVolunteer = (id) => {
    fetch("http://localhost:4000/delete-volunteer", {
      method: 'delete',
      headers: {
        'content-type': 'application/json',
        id: id
      }
    })

      .then(res => res.json())
      .then(result => {
        const existingEvents = volunteer.filter(data => data._id !== id)
        if(result){
          setVolunteer(existingEvents)
        }
    })
  }
  return (
    <div className="pl-1">
    <h4 style={headerStyle}>Volunteer registered list</h4>
  <table className="table table-striped pl-1">
   
    <thead className="thead-dark">
      <tr >
          <th scope="col">No.</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Date</th>
          <th scope="col">Event Name</th>
          <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {
            volunteer.map((vlr,index)  =>
              <tr key={ vlr._id}>
            <th scope="row">{ index+1}</th>
            <td>{vlr.name}</td>
            <td>{vlr.email}</td>
            <td>{vlr.date}</td>
            <td>{vlr.eventName}</td>
            <td onClick={()=>removeVolunteer(vlr._id)} className="text-center delete_logo_wrapper">
              <FontAwesomeIcon className="delete_logo" style={{color: 'red'}} icon={ faTrashAlt}/>
            </td>
          </tr>
        )
      }
    </tbody>
    </table>
  </div>
  );
};

export default VolunteerList;