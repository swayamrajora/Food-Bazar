import React, { useState } from 'react';

function Form() {
  const [data, setData] = useState({
    name: '',
    email: '',
    age: '',
    city: ''
  });

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  return (
    <div>
      <h3>Form</h3>
      
      <input
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
      /><br /><br />
        <input
        name="email"
        placeholder='Email'
        value={data.email}
        onChange={handleChange}
        /><br /><br />
        <input
        name="age"
        placeholder='Age'
        value={data.age}
        onChange={handleChange}
        /><br /><br />
        <input
        name="city"
        placeholder='City'
        value={data.city}
        onChange={handleChange}
        /><br /><br />