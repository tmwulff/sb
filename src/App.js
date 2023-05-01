// Importing modules
//https://www.geeksforgeeks.org/how-to-connect-reactjs-with-flask-api/
import React, { useState, useEffect } from "react";
import "./App.css";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './Home';
import About from './About';
import Model from './Model';
import Project from './Project';

  
function App() {
    // usestate for setting a javascript
    // object for storing and using data
    const [data, setdata] = useState({
        Teams: []
    });
    const [value, setvalue] = useState({
      value: "1"
  });
    const [games, setGames] = useState({

    })
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleChange = (event) => {
      setvalue(value)
    };
  
    // // Using useEffect for single rendering
    // useEffect(() => {
    //     // Using fetch to fetch the api from 
    //     // flask server it will be redirected to proxy
    //     fetch("/data").then((res) =>
    //         res.json().then((data) => {
    //             // Setting a data from api
    //             setdata({
    //                 Teams: data.Teams,
    //             });
    //         })
    //     );
    // }, []);

    //     // Using useEffect for single rendering
    //     useEffect(() => {
    //       // Using fetch to fetch the api from 
    //       // flask server it will be redirected to proxy
    //       fetch("/oldGames").then((res) =>
    //           res.json().then((data) => {
    //               // Setting a data from api
    //               setdata({
    //                   Teams: data.Teams,
    //               });
    //           })
    //       );
    //   }, []);
  
  
    return (
        <div className="App">
            <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static" style={{ backgroundColor: 'Black'}}>
                <Toolbar>
                <div>
                  {/*https://mui.com/material-ui/react-menu/*/}
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleClick}
                  >
                    <MenuIcon>
                    </MenuIcon>         
                  </IconButton>
                  <Menu
                    keepMounted
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    open={Boolean(anchorEl)}
                  >
                    {/* https://stackoverflow.com/questions/32106513/material-ui-menu-using-routes */}
                    <MenuItem component="a" href="/">Home</MenuItem> 
                    <MenuItem component="a" href="/About">About Project</MenuItem> 
                    <MenuItem component="a" href="/Model">Past Model Predictions</MenuItem> 
                    <MenuItem component="a" href="/Project">Project Deliverables</MenuItem>
                  </Menu>
                </div>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Machine Learning in Sports Betting (NBA)
                  </Typography>
                </Toolbar>
              </AppBar>
            </Box>
            <div>
            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/About' element={<About/>} />
                    <Route path='/Model' element={<Model/>} />
                    <Route path='/Project' element={<Project/>} />
                </Routes>
            </Router>
    
            </div>
        </div>
    );
}
  
export default App;