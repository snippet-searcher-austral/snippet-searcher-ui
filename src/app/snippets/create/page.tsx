'use client'

import React, {FC, useCallback} from 'react'
import {Paper, Typography} from '@mui/material'
import {createSnippet, CreateSnippet} from '@/data/snippet'
import {CreateSnippetForm} from '@/app/snippets/create/createSnippetForm'
import {useMutation} from '@tanstack/react-query'
import {useRouter} from 'next/navigation'

const CreateSnippetPage: FC = () => {
  const router = useRouter()

  const {mutate} = useMutation(['snippets'], createSnippet)

  let handleCreate: (createSnippet: CreateSnippet) => void
  handleCreate = useCallback((createSnippet: CreateSnippet) => {
    mutate(createSnippet)
    router.push('/snippets')
  }, [mutate, router])

  return (
    <Paper variant="outlined" sx={{my: {xs: 3, md: 6}, p: {xs: 2, md: 3}}}>
      <Typography component="h1" variant="h4" align="center">
        Create a new Snippet
      </Typography>
      <CreateSnippetForm onCreate={handleCreate}/>
    </Paper>
  )
}

export default CreateSnippetPage