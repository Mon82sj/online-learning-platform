// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import Navbar from 'react-bootstrap/Navbar';
// import { Container, Nav } from 'react-bootstrap';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import axiosInstance from './AxiosInstance';
// import Dropdown from 'react-bootstrap/Dropdown';




// const Register = () => {
//    const navigate = useNavigate()
//    const [selectedOption, setSelectedOption] = useState('Select User');
//    const [data, setData] = useState({
//       name: "",
//       email: "",
//       password: "",
//       type: "",
//    })

//    const handleSelect = (eventKey) => {
//       setSelectedOption(eventKey);
//       setData({ ...data, type: eventKey });
//    };

//    const handleChange = (e) => {
//       const { name, value } = e.target;
//       setData({ ...data, [name]: value });
//    };

//    const handleSubmit = (e) => {
//       e.preventDefault()
//       if (!data?.name || !data?.email || !data?.password || !data?.type) return alert("Please fill all fields");
//       else {
//          axiosInstance.post('/api/user/register', data)
//             .then((response) => {
//                if (response.data.success) {
//                   alert(response.data.message)
//                   navigate('/login')

//                } else {
//                   console.log(response.data.message)
//                }
//             })
//             .catch((error) => {
//                console.log("Error", error);
//             });
//       }
//    };


//    return (
//       <>
//          <Navbar expand="lg" className="bg-body-tertiary">
//             <Container fluid>
//                <Navbar.Brand><h2>Study App</h2></Navbar.Brand>
//                <Navbar.Toggle aria-controls="navbarScroll" />
//                <Navbar.Collapse id="navbarScroll">
//                   <Nav
//                      className="me-auto my-2 my-lg-0"
//                      style={{ maxHeight: '100px' }}
//                      navbarScroll
//                   >
//                   </Nav>
//                   <Nav>
//                      <Link to={'/'}>Home</Link>
//                      {/* <Link to={'/about'}>About</Link> */}
//                      <Link to={'/login'}>Login</Link>
//                      <Link to={'/register'}>Register</Link>
//                   </Nav>

//                </Navbar.Collapse>
//             </Container>
//          </Navbar>
//          <div className="first-container">
//             <Container component="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
//                <Box
//                   sx={{
//                      marginTop: 8,
//                      marginBottom: 4,
//                      display: 'flex',
//                      flexDirection: 'column',
//                      alignItems: 'center',
//                      padding: '10px',
//                      background: '#dddde8db',
//                      border: '1px solid lightblue',
//                      borderRadius: '5px'
//                   }}
//                >
//                   <Avatar sx={{ bgcolor: 'secondary.main' }}>
//                      {/* <LockOutlinedIcon /> */}
//                   </Avatar>
//                   <Typography component="h1" variant="h5">
//                      Register
//                   </Typography>
//                   <Box component="form" onSubmit={handleSubmit} noValidate>
//                      <TextField
//                         margin="normal"
//                         fullWidth
//                         id="name"
//                         label="Full Name"
//                         name="name"
//                         value={data.name}
//                         onChange={handleChange}
//                         autoComplete="name"
//                         autoFocus
//                      />
//                      <TextField
//                         margin="normal"
//                         fullWidth
//                         id="email"
//                         label="Email Address"
//                         name="email"
//                         value={data.email}
//                         onChange={handleChange}
//                         autoComplete="email"
//                         autoFocus
//                      />
//                      <TextField
//                         margin="normal"
//                         fullWidth
//                         name="password"
//                         value={data.password}
//                         onChange={handleChange}
//                         label="Password"
//                         type="password"
//                         id="password"
//                         autoComplete="current-password"
//                      />
//                      <Dropdown className='my-3'>
//                         <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
//                            {selectedOption}
//                         </Dropdown.Toggle>

//                         <Dropdown.Menu>
//                            <Dropdown.Item onClick={() => handleSelect("Student")}>Student</Dropdown.Item>
//                            <Dropdown.Item onClick={() => handleSelect("Teacher")}>Teacher</Dropdown.Item>
//                         </Dropdown.Menu>
//                      </Dropdown>
//                      <Box mt={2}>
//                         <Button
//                            type="submit"
//                            variant="contained"
//                            sx={{ mt: 3, mb: 2 }}
//                            style={{ width: '200px' }}
//                         >
//                            Sign Up
//                         </Button>
//                      </Box>
//                      <Grid container>
//                         <Grid item>Have an account?
//                            <Link style={{ color: "blue" }} to={'/login'} variant="body2">
//                               {" Sign In"}
//                            </Link>
//                         </Grid>
//                      </Grid>
//                   </Box>
//                </Box>
//             </Container>
//          </div>

//       </>
//    )
// }

// export default Register


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Dropdown } from 'react-bootstrap';  // <-- Add this import
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axiosInstance from './AxiosInstance';
import { Snackbar } from '@mui/material';
import './Register.css';

const Register = () => {
   const navigate = useNavigate();
   const [selectedOption, setSelectedOption] = useState('Select User');
   const [data, setData] = useState({
      name: "",
      email: "",
      password: "",
      type: "",
   });
   const [showPassword, setShowPassword] = useState(false);
   const [openAlert, setOpenAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");
   const [alertType, setAlertType] = useState("success");

   const handleSelect = (eventKey) => {
      setSelectedOption(eventKey);
      setData({ ...data, type: eventKey });
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!data?.name || !data?.email || !data?.password || !data?.type) {
         setAlertMessage("Please fill all fields.");
         setAlertType("error");
         setOpenAlert(true);
         return;
      } else {
         axiosInstance.post('/api/user/register', data)
            .then((response) => {
               if (response.data.success) {
                  setAlertMessage("Registration successful! Redirecting to login...");
                  setAlertType("success");
                  setOpenAlert(true);
                  setTimeout(() => navigate('/login'), 1500); // Redirect to login after 1.5s
               } else {
                  setAlertMessage("User already exists. Please try a different email.");
                  setAlertType("error");
                  setOpenAlert(true);
               }
            })
            .catch((error) => {
               console.log("Error", error);
               setAlertMessage("Something went wrong. Please try again.");
               setAlertType("error");
               setOpenAlert(true);
            });
      }
   };

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <Navbar.Brand><h2>LearnHub</h2></Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav
                     className="me-auto my-2 my-lg-0"
                     style={{ maxHeight: '100px' }}
                     navbarScroll
                  >
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <div className="first-container">
            <Container component="main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
               <Box
                  sx={{
                     marginTop: 8,
                     marginBottom: 4,
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     padding: '20px',
                     background: '#eeee',
                     border: '1px solid lightblue',
                     borderRadius: '5px',
                     boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                     width: '100%',
                     maxWidth: '520px', // Expanded width
                  }}
               >
                  <Avatar sx={{ bgcolor: '#134B70', marginBottom: '1rem' }}>
                  </Avatar>
                  <Typography component="h1" variant="h5" sx={{ marginBottom: '1.5rem' }}>
                     Register
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
                     <TextField
                        margin="normal"
                        fullWidth
                        id="name"
                        label="Full Name"
                        name="name"
                        value={data.name}
                        onChange={handleChange}
                        autoComplete="name"
                        variant="outlined"
                        sx={{
                           backgroundColor: '#EEEEEE',
                           borderRadius: '5px',
                           marginBottom: '1.25rem',
                        }}
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        autoComplete="email"
                        variant="outlined"
                        sx={{
                           backgroundColor: '#EEEEEE',
                           borderRadius: '5px',
                           marginBottom: '1.25rem',
                        }}
                     />
                     <TextField
                        margin="normal"
                        fullWidth
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        autoComplete="current-password"
                        variant="outlined"
                        sx={{
                           backgroundColor: '#EEEEEE',
                           borderRadius: '5px',
                           marginBottom: '1.25rem',
                        }}
                        InputProps={{
                           endAdornment: (
                              <IconButton
                                 aria-label="toggle password visibility"
                                 onClick={handleClickShowPassword}
                                 edge="end"
                              >
                                 {showPassword ? <VisibilityOff /> : <Visibility />}
                              </IconButton>
                           ),
                        }}
                     />
                     <Dropdown className="my-3">
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                           {selectedOption}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                           <Dropdown.Item onClick={() => handleSelect("Student")}>Student</Dropdown.Item>
                           <Dropdown.Item onClick={() => handleSelect("Teacher")}>Teacher</Dropdown.Item>
                           <Dropdown.Item onClick={() => handleSelect("Admin")}>Teacher</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>

                     <Box mt={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                           type="submit"
                           variant="contained"
                           sx={{
                              mt: 3, mb: 2,
                              width: '180px', // Smaller width for the button
                              backgroundColor: '#134B70',
                              '&:hover': {
                                 backgroundColor: '#1E40AF',
                              }
                           }}
                        >
                           Sign Up
                        </Button>
                     </Box>
                     <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                           <Typography variant="body2" align="center">
                              Already have an account?{' '}
                              <Link style={{ color: "#134B70" }} to={'/login'} variant="body2">
                                 Sign In
                              </Link>
                           </Typography>
                        </Grid>
                     </Grid>
                  </Box>
               </Box>
            </Container>
         </div>

         {/* Snackbar for alert messages */}
         <Snackbar
            open={openAlert}
            autoHideDuration={6000}
            onClose={() => setOpenAlert(false)}
            message={alertMessage}
            severity={alertType} // The type of message: 'success' or 'error'
         />
      </>
   )
}

export default Register;