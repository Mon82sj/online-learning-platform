import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Button, Navbar } from 'react-bootstrap';
import AllCourses from './AllCourses';
import './home.css';

const Home = () => {
   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <Navbar.Brand><h2 style={{color:"#201E43"}}>LearnHub</h2></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                  >
                  </Nav>
                  <Nav >
                     <Button className='menubtns'><Link to={'/'}>Home</Link></Button>
                     <Button className='menubtns'><Link to={'/login'}>Login</Link></Button>
                     <Button className='menubtns'><Link to={'/register'}>Register</Link></Button>
                  </Nav>

               </Navbar.Collapse>
            </Container>
         </Navbar>

         <div id='home-container' className='first-container'>
            <div className="content-home">
               <h2 style={{color:"#eeee"}}>LearnHuB</h2>
               <p className='moto'>Your center for Skill Enhancement</p>
               <Link to={'/register'}><Button variant='warning' className='m-2' size='md'>Explore Courses</Button></Link>
            </div>
         </div><br/><br/>

         <Container className="second-container"><br/><br/>
            <center><h2 style={{fontWeight:"12vh"}}><b>TRENDING COURSES</b></h2></center>
            <AllCourses />
         </Container>
      </>
   )
}

export default Home


