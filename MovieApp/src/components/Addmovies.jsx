import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Addmovies = () => {
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>Add Movies</h1>
      <div>
        <TextField         
         
          label="Name"
          
        />
        </div>
        <div>
        <TextField
                   
          label="Image"
          
        />
        </div>
        <div>
        <TextField
         
          label="Description"
        
        />
        </div>
        <div>
        <TextField         
          label="Director"
          
        />
        </div>
        <Button variant='contained'>Add</Button>
        </Box>
    </div>
  )
}

export default Addmovies