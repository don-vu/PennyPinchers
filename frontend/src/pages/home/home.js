import React, { useState } from 'react';
import image from "../../img/background.png";
import "./home.css";



function Home() {
  const { user, setUser } = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id='body'>
      <Header />
      <Card
        className='section'

        title='About Us'
        description='Being a student is stressful enough, let us relieve some of the stress by helping you organize your funds.
        Based on your selected criteria, we will help you generate a customized plan so you can keep track
        of how much you spend for each category every month for the length of your academic term.'
      />

      <Card
        className='section bg-grey'
        title='Our Values'
        description='We believe that every student deserve to be able to manage their money finances for free! '
      />

      <Card
        className='section'
        title='Our Mission'
        description='Is to be able to provide students with an easy to use calculator that helps them with budgeting for the upcoming semester.'
      />
      <ContactContainer />
    </div>
  );
}

const Header = () => {
  return (
    <div className='header'>
      <span className='header-title'>
        Penny Pinchers
      </span>
      <br />
      <span className="header-text">

      </span>
    </div>
  );
}

const Card = (props) => {
  return (
    <div className={props.className} >
      <div className="small-div">
        <i className={props.className}></i>
        <img src={props.img} alt='' />
      </div>

      <div className="big-div">
        <span className='div-title'>
          {props.title}
        </span>
        <br />
        <span>
          {props.description}
        </span>
      </div>
    </div>
  )
}



const ContactContainer = () => {
  return (
    <div className='contact-container bg-grey'>
      <span className="div-title">Contact us</span>
      <div className='contact-form'>
        <div id='sect1'>
          <span>Find Us:</span>
          <span>
            <i className="fas fa-map-marker-alt"></i>
            University of Alberta
          </span>
          <span>
            <i className="fas fa-mobile-alt"></i>
            (780) 492-3111
          </span>
          <span>
            <i className="far fa-envelope"></i>
            HackED 2023
          </span>
        </div>

        <div id='sect2'>
          <span>
            Contact
          </span>

          <input type="text" placeholder="email address" className="input-field" />
          <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
          <button className="contact-btn">Send</button>
        </div>
      </div>
    </div>
  );

}


export default Home;
