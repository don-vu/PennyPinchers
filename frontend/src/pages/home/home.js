import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Home() {
  const { user, setUser } = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the home page, PENNY PINCHER!</p>

    </div>
  );
}

export default Home;
