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

// const Login = () => {
//    const navigate = useNavigate()
//    const [data, setData] = useState({
//       email: "",
//       password: "",
//    })

//    const handleChange = (e) => {
//       const { name, value } = e.target;
//       setData({ ...data, [name]: value });
//    };

//    const handleSubmit = (e) => {
//       e.preventDefault();

//       if (!data?.email || !data?.password) {
//          return alert("Please fill all fields");
//       } else {
//          axiosInstance.post('/api/user/login', data)
//             .then((res) => {
//                if (res.data.success) {
//                   alert(res.data.message)

//                   localStorage.setItem("token", res.data.token);
//                   localStorage.setItem("user", JSON.stringify(res.data.userData));
//                   navigate('/dashboard')
//                   setTimeout(() => {
//                      window.location.reload()
//                   }, 1000)
//                } else {
//                   alert(res.data.message)
//                }
//             })
//             .catch((err) => {
//                if (err.response && err.response.status === 401) {
//                   alert("User doesn't exist");
//                }
//                navigate("/login");
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

//          <div className='first-container'>
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
//                   </Avatar>
//                   <Typography component="h1" variant="h5">
//                      Sign In
//                   </Typography>
//                   <Box component="form" onSubmit={handleSubmit} noValidate>

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
//                      <Box mt={2}>
//                         <Button
//                            type="submit"
//                            variant="contained"
//                            sx={{ mt: 3, mb: 2 }}
//                            style={{ width: '200px' }}
//                         >
//                            Sign In
//                         </Button>
//                      </Box>
//                      <Grid container>
//                         <Grid item>Have an account?
//                            <Link style={{ color: "blue" }} to={'/register'} variant="body2">
//                               {" Sign Up"}
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

// export default Login



import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav } from 'react-bootstrap';
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

const Login = () => {
   const navigate = useNavigate()
   const [data, setData] = useState({
      email: "",
      password: "",
   });
   const [showPassword, setShowPassword] = useState(false);
   const [openAlert, setOpenAlert] = useState(false);
   const [alertMessage, setAlertMessage] = useState("");
   const [alertType, setAlertType] = useState("success");

   const handleChange = (e) => {
      const { name, value } = e.target;
      setData({ ...data, [name]: value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!data?.email || !data?.password) {
         setAlertMessage("Please fill all fields.");
         setAlertType("error");
         setOpenAlert(true);
         return;
      } else {
         axiosInstance.post('/api/user/login', data)
            .then((res) => {
               if (res.data.success) {
                  setAlertMessage("Login successful! Redirecting...");
                  setAlertType("success");
                  setOpenAlert(true);
                  localStorage.setItem("token", res.data.token);
                  localStorage.setItem("user", JSON.stringify(res.data.userData));
                  setTimeout(() => navigate('/dashboard'), 1500); // Redirect after 1.5s
               } else {
                  setAlertMessage("Invalid credentials. Please try again.");
                  setAlertType("error");
                  setOpenAlert(true);
               }
            })
            .catch((err) => {
               if (err.response && err.response.status === 401) {
                  setAlertMessage("Invalid credentials. Please try again.");
                  setAlertType("error");
                  setOpenAlert(true);
               }
               navigate("/login");
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
                     Sign In
                  </Typography>
                  <Box component="form" onSubmit={handleSubmit} noValidate style={{ width: '100%' }}>
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
                           Sign In
                        </Button>
                     </Box>
                     <Grid container justifyContent="center" alignItems="center">
                        <Grid item>
                           <Typography variant="body2" align="center">
                              Don't have an account?{' '}
                              <Link style={{ color: "#134B70" }} to={'/register'} variant="body2">
                                 Sign Up
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

export default Login;