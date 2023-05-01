import { Typography } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';

const Model = () => {
    const [model, setmodel] = useState({
        Model: [],
        LastFive: 0.0,
        Season: 0.0
    });
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'date', headerName: 'Date', width: 200 },
        { field: 'team', headerName: 'Team', width: 130 },
        { field: 'team_opp', headerName: 'Opponent', width: 130 },
        { field: 'Covered', headerName: 'Covered Spread', width: 130 },
        { field: 'Prediction', headerName: 'Prediction', width: 130 },
        { field: 'Line2', headerName: 'Line', width: 130 },
        { field: 'Result', headerName: 'Result', width: 130 },
        { field: 'Prediction1', headerName: 'Prediction', width: 130 },
      ];
    const [spinner, setSpinner] = useState(true);    

    // useEffect(() => {
    //     // Using fetch to fetch the api from 
    //     // flask server it will be redirected to proxy
        
        
    //     fetch("/pastModel").then((res) =>
    //         res.json().then((model) => {
    //             setSpinner(true);
    //             // Setting a data from api
    //             setmodel({
    //                 Model: model.Model,
    //                 LastFive: model.LastFive,
    //                 Season: model.Season
    //             });
    //             setSpinner(false);
    //         }))
        
    // }, [model]);


      
  const hundredGames = `Model Results over last 100 games: 
  `
  ;
  const season = `
  Model Results over 2023 season
  `;
  const waitMessage = `Please wait while our model runs updated data. This may take a moment.


  `
  if (spinner){
    return(
    <div>
        <h1>Our Model</h1>
        <Typography style={{whiteSpace: 'pre-line'}}>
            {waitMessage}
        </Typography>
        <CircularProgress />
    
    </div>)
  }
  return (
    <div>
      <h1>Our Model</h1>
      <Typography>
        Results from our Neural Network model looking at the 2023 NBA season.
      </Typography>
      <div style={{ height: 400, width: '100%' }}>
      {/* <DataGrid
            rows={model.Model}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        /> */}
        </div>
        <Typography display="block" style={{whiteSpace: 'pre-line'}}>
            {hundredGames} {model.LastFive} {season} {model.Season}
        </Typography>
    </div>
  );
};
  
export default Model;