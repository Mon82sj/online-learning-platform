import React, { useState } from 'react';
import NavBar from './NavBar';
import UserHome from "./UserHome"
import { Container } from 'react-bootstrap';
import AddCourse from '../user/teacher/AddCourse';

const Dashboard = () => {
   const [selectedComponent, setSelectedComponent] = useState('home');

   const renderSelectedComponent = () => {
      switch (selectedComponent) {
         case 'home':
            return <UserHome />
         case 'addcourse':
           return <AddCourse />
         default:
            return <UserHome />

      }
   };

   return (
      <>
         <NavBar setSelectedComponent={setSelectedComponent} />
         <Container  className='my-3'>
            {renderSelectedComponent()}
         </Container>
      </>
   );
};

export default Dashboard;

