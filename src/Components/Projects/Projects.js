import React from 'react'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TodoList from '../../assets/Todo.png';
import Weather from '../../assets/weatherapp.png';
import language from '../../assets/languagetranslator.png'
import stopwatch from '../../assets/stopwatch.png'
import kairaa from '../../assets/kairaa.png'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function Projects() {
  return (
    <div className='w-full h-full mx-auto container text-center justify-center'>
    <h2 className='font-bold text-3xl py-6'>Projects</h2>
    <div className='mx-20 my-3 justify-center text-center'>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={4} >
        <Item sx={{ height: { xs: "250px", sm: "300px", md: "350px" }, width: { xs: "200px", sm: "250px", md: "300px" } }}><a href="https://todo-list-react-three-mu.vercel.app/"><img src={TodoList} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}}/></a></Item>
          <li className='mt-3 list-none text-start '><a href="https://todo-list-react-three-mu.vercel.app/"><span className='font-bold'>Title-</span>Todo App</a></li>
          <li className='list-none text-start'><span className='font-bold'>Description-</span> A simple task management app to add, edit, delete, and mark tasks as complete.</li>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} >
        <Item
    justifyContent={"center"}
    alignItems={"center"}  // Aligns items vertically
    display={"flex"} textAlign={"center"} sx={{ height: { xs: "250px", sm: "300px", md: "350px" }, width: { xs: "200px", sm: "250px", md: "300px" } }}><a href="https://weather-app-in-react-tau.vercel.app/"><img src={Weather} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}}/></a></Item>
          <li className='mt-3  list-none text-start'><a href="https://weather-app-in-react-tau.vercel.app/"><span className='font-bold'>Title-</span>Weather App</a></li>
          <li className='list-none text-start'><span className='font-bold'>Description-</span>A weather forecast app displaying current weather and forecast details for selected cities.</li>
      
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4} lg={3} >
          <Item sx={{height:{xs:"250px",sm:"300px",md:"350px"},width:{xs:"200px",sm:"250px",md:"300px"}}} ><a href="https://weather-app-in-react-tau.vercel.app/"><img src={language} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}}/></a></Item>
          <li className='mt-3  list-none text-start'><a href="https://weather-app-in-react-tau.vercel.app/"><span className='font-bold'>Title-</span>Language Translator</a></li>
          <li className='list-none text-start'><span className='font-bold'>Description-</span>Translate words or sentences between languages.</li>
       </Grid> */}
       {/* <Grid item xs={12} sm={6} md={4} lg={3} >
          <Item sx={{height:{xs:"250px",sm:"300px",md:"350px"},width:{xs:"200px",sm:"250px",md:"300px"}}} ><a href="https://weather-app-in-react-tau.vercel.app/"><img src={language} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}}/></a></Item>
          <li className='mt-3  list-none text-start'><a href="https://weather-app-in-react-tau.vercel.app/"><span className='font-bold'>Title-</span>Language Translator</a></li>
          <li className='list-none text-start'><span className='font-bold'>Description-</span>Translate words or sentences between languages.</li>
       </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} bgcolor={'whitesmoke'}>
          <Item sx={{height:{xs:"250px",sm:"300px",md:"350px"},width:{xs:"200px",sm:"250px",md:"300px"}}}><a href="https://weather-app-in-react-tau.vercel.app/"><img src={stopwatch} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}}/></a></Item>
          <li className='mt-3  list-none text-start'><a href="https://weather-app-in-react-tau.vercel.app/"><span className='font-bold'>Title-</span>Stop Watch</a></li>
          <li className='list-none text-start'><span className='font-bold'>Description-</span>stopwatch in React that includes start, stop, and reset functionalities. This stopwatch will display time in the format HH:MM:SS.</li>
        </Grid> */}
        <Grid item xs={12} sm={6} md={4} lg={4} >
          <Item sx={{height:{xs:"250px",sm:"300px",md:"350px"},width:{xs:"200px",sm:"250px",md:"300px"}}}><a href="https://www.kairaablockchainacademy.com/"><img src={kairaa} alt="" style={{width:"100%",height:"100%",objectFit:"contain"}}/></a></Item>
          <li className='mt-3  list-none text-start'><a href="https://www.kairaablockchainacademy.com/"><span className='font-bold'>Title-</span>kairaablockchainacademy</a></li>
          <li className='list-none text-start'><span className='font-bold'>Description-</span>AcademySite for Kairaa TechServe Pvt.Ltd</li>
        </Grid>
        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item> </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Item> </Item>
        </Grid> */}
       
      </Grid>
    </Box>

    </div>
    </div>
  )
}

export default Projects