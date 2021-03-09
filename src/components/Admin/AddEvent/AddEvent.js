import React, { useState } from 'react';
import { Col, Form, } from 'react-bootstrap';

const AddEvent = () => {
  const [event, setEvent] = useState({});
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  }
  const handleBlur = (e) => {
    const newEvent = { ...event };
    newEvent[e.target.name] = e.target.value;
    setEvent(newEvent)
  }
  const handleEventSb = (e) => {
    e.preventDefault();    
    fetch('https://quiet-badlands-35589.herokuapp.com/add-event', {
      method: 'POST',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify({})
    })
     
 
  }
  return (
    <div className="p-2">
      <h4 className="py-2">Add event</h4>
      <div className="form-section py-2 px-3">
        <Form onSubmit={handleEventSb}>
          <Form.Row>
                <Form.Group as={Col} controlId="formGrideName">
                   <Form.Label>Event Name</Form.Label>
              <Form.Control type="text"
                required
                placeholder="Event name" name="eName"
                onBlur={handleBlur} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGrideDate">
                    <Form.Label>Event Date</Form.Label>
              <Form.Control
                required
                type="text" placeholder="dd/MM/YYYY" name="eDate" onBlur={handleBlur} />
                </Form.Group>
          </Form.Row>
          
          <Form.Row>
            
             <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                 <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} name="description"
                required
                onBlur={handleBlur} />
              </Form.Group>
                <Form.Group as={Col}>
              <Form.File id="exampleFormControlFile1" label="Banner" type="file" onChange={handleFileChange} name="uploadImg" />
              </Form.Group>
          </Form.Row>
          <button className="btn btn-primary" type="submit">ADD EVENT</button>
        </Form>
      </div>
    </div>
  );
};

export default AddEvent;