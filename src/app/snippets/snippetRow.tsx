'use client'

import {FC, useCallback} from 'react'
import {TableCell, TableRow} from '@mui/material'
import {SnippetDescriptor} from '@/data/snippet'
import {useRouter} from 'next/navigation'

export type SnippetRowType = {
  snippet: SnippetDescriptor
}
export const SnippetRow: FC<SnippetRowType> = ({snippet}) => {
  const router = useRouter()

  const handleClick = useCallback(() => {
    router.push(`/snippets/edit/${snippet.id}`)
  }, [router, snippet.id])

  return (
    <TableRow key={snippet.id} onClick={handleClick}>
      <TableCell>{snippet.name}</TableCell>
      <TableCell>{snippet.type}</TableCell>
      <TableCell>{snippet.compliance}</TableCell>
    </TableRow>
  )
}