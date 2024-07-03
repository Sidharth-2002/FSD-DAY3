import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import React from 'react'

const Viewmovies = () => {
    const rows=[{name:'Avengers',description:'Movie1',director:'Russo Brother'},
        {name:'Avengers:Age of Ultron',description:'Movie2',director:'Russo Brother'},
        {name:'Avengers:Infinity War',description:'Movie3',director:'Russo Brother'
    }]
  return (
    <div>
    {rows.map((movie) => (
        <Card sx={{ minWidth: 275, marginBottom: '5%'}}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary" gutterBottom>
             {movie.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {movie.description}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {movie.director}
            </Typography>            
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
    ))}
    </div>)

  
}

export default Viewmovies