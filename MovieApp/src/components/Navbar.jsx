import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar >
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:'left' }}>
            MovieApp         </Typography>
            <Link to={'/add'}>
          <Button style={{color:'white'}} color="inherit">Add<br/>Movies</Button>
          </Link>
          <Link to={'/view'}>
          <Button style={{color:'white'}} color="inherit">View<br/>Movies</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar