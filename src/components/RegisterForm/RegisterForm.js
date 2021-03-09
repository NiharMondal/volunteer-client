import { FormControl, FormGroup, Input, InputLabel } from '@material-ui/core';
import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../Home/Header/Group 1329.png';
import './RegisterForm.css';
const RegisterForm = () => {
  const [user] = useContext(UserContext);
  const [form, setForm] = useState({ eventName: user.event?.name, name: user.name, email: user.email, img:user.event?.img })

  const handleRegister = (e) => {
    e.preventDefault();
   
    fetch("https://quiet-badlands-35589.herokuapp.com/add-volunteer", {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body:JSON.stringify({info:form})
    })
    alert('You have been added volunteer successfully')
  }
  return (
    <section className="section_wrapper">
      <div className="form_wrapper">
        <div className="grab_logo mb-2">
          <Link to="/">
            <img src={logo} alt=""/>
          </Link>
        </div>
        <form className="register_form border" onSubmit={handleRegister}>
          <h4>Register as a volunteer</h4>
          <FormGroup>
          <FormControl>
            <InputLabel htmlFor="name">Full Name</InputLabel>
              <Input onBlur={(e) => setForm({ ...form, name: e.target.value })} required value={ user.name}/>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
              <Input onBlur={(e) => setForm({ ...form, email: e.target.value })} type="email" required value={ user.email}/>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="description">Description</InputLabel>
            <Input  onBlur={(e) =>setForm({...form,description:e.target.value})} required/>
          </FormControl>
          <FormControl>
            <Input  onBlur={(e) =>setForm({...form,date: new Date(e.target.value).toDateString()})} type="date" required/>
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="event-name">Event Name</InputLabel>
              <Input onBlur={(e) => setForm({ ...form, eventName: e.target.value })} required value={ user.event?.name}/>
            </FormControl>
            <button type="submit" className="btn btn-primary mt-2">Register</button>
         </FormGroup>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;