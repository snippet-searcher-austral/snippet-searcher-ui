'use client'

import React, {FC} from 'react'
import {useOperations} from '@/data/operationsContext'
import {useQuery} from '@tanstack/react-query'
import {CircularProgress, Grid, Paper, Typography} from '@mui/material'
import CodeMirror from '@uiw/react-codemirror'
import {javascript} from '@codemirror/lang-javascript'

type CreateSnippetPageProps = {
  params: {
    id: string
  }
}

const CreateSnippetPage: FC<CreateSnippetPageProps> = ({params}) => {
  const id: string = params.id

  const {snippetOperations} = useOperations()
  const {data: snippet, isFetching} = useQuery(['snippets', 'full', id], () => snippetOperations.getSnippetById(id))

  return (
    <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
      <Typography component="h1" variant="h4" align="center">
        Snippet {snippet?.name}
      </Typography>
      <Grid container justifyContent="center">
        {isFetching ? (
          <Grid item xs={1}>
            <CircularProgress/>
          </Grid>
        ) : snippet !== undefined && (
          <Grid item xs={12}>
            <CodeMirror
              value={snippet.content}
              height="500px"
              width="100%"
              extensions={[javascript({typescript: true, jsx: false})]}
              readOnly={true}
            />
          </Grid>
        )}
      </Grid>

    </Paper>
  )
}

export default CreateSnippetPage