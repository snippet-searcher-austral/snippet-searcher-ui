'use client'

import {FC} from 'react'
import {Button, Paper} from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const CreateSnippetPage: FC = () => {
  return (
    <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
      <Typography component="h1" variant="h4" align="center">
        Create a new Snippet
      </Typography>
      <>
        <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
          <Button sx={{mt: 3, ml: 1}}>
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{mt: 3, ml: 1}}
          >
            Create
          </Button>
        </Box>
      </>
    </Paper>
  )
}

export default CreateSnippetPage