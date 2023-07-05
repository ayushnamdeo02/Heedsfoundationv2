import React, { Component } from 'react';
import './about/about.css';
import logo from '../images/logobgclear.png';

class About extends Component {
  render() {
    return (
      <div className="about-us" id='aboutus'><br></br><br></br>
      <h2 className="section-title">About Us</h2>
      <div className='container-about'>
      <img src={logo} alt="Logo" className="logo-image"></img>
      <p className="about-description">Heeds Foundation, founded by students from Nagpur City, is a non-profit organization dedicated to empowering communities through education and addressing social issues and instabilities. with a mission to empower communities through education, healthcare, sustainable development, and humanitarian response, Heeds Foundation aims to provide support, resources, and assistance to those in need. The organization was established by a group of passionate students who identified various social challenges and decided to take action by forming a Heeds Foundation. Through their collective efforts, Heeds Foundation strives to create positive change, promote equality, and make a meaningful impact in the lives of individuals and communities.

<br></br>
Our primary focus is on providing quality education to underserved child, ensuring that every child has access to learning opportunities. We believe that education is the key to unlocking a brighter future and creating lasting change. Through our initiatives, we aim to bridge the educational gap, provide resources and scholarships, and promote equal access to education for all. With a strong commitment to promoting equality and fostering positive change, Heeds Foundation strives to empower individuals and communities through the transformative power of education.</p>
      </div>
      <div className="mission-vision">
        <div className="mission">
          <h3 className="section-subtitle">Our Mission</h3>
          <p className="mission-description">
          Our mission is to empower individuals and communities through education, health care, and awareness. We are dedicated to providing access to quality education for all, ensuring that every child has the opportunity to learn, grow, and reach their full potential. We strive to improve access to essential health care services, promoting well-being and preventive measures. Additionally, we are committed to creating awareness about social issues, environmental sustainability, and promoting positive change in society. Through our mission, we aim to create a better future by empowering individuals, fostering equality, and driving sustainable development.
          </p>
        </div>
        <div className="vision">
          <h3 className="section-subtitle">Our Vision</h3>
          <p className="vision-description">
          “Creating a future where every child has access to quality education and healthcare,
           where communities thrive through sustainable development. Our ultimate goal is to 
           ensure that no child goes hungry, they are nourished. " We need a brighter tomorrow."
          </p>
        </div>
      </div>
      
    </div>
    );
  }
}

export default About
