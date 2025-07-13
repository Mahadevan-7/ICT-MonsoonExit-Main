import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [art, setArt] = useState([]);

  const navigate = useNavigate();

  useEffect(() =>{
    axios.get("http://localhost:3001/get")
    .then(res => setArt(res.data))
    .catch(err => console.error(err));
  }, [])

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
    .then(() =>{
      setArt(art.filter(val => val._id !== id))
    })
    .catch(err => console.error(err));
  }


  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {art.map((val, index) => (
          <Grid item key={index}>
            <Card sx={{ maxWidth: 280, minWidth: 250 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={val.img_url}
                title={val.title}
              />
              <CardContent>
                <Typography variant="caption" color="text.secondary">
                  {val.content}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {val.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" sx={{ bgcolor: '#9c27b0' }} onClick={() => handleDelete(val._id)}>
                  Delete
                </Button>
                <Button size="small" variant="contained" sx={{ bgcolor: '#9c27b0' }} onClick={() => navigate(`/edit/${val._id}`)}>
                  Update
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
