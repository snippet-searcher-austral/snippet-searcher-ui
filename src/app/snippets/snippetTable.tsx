import {FC} from 'react'
import Typography from '@mui/material/Typography'
import {CircularProgress, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import {getSnippetDescriptors} from '@/data/snippet'

export const SnippetTable: FC = () => {

  const {data, isFetching} = useQuery(['snippet-descriptors'], getSnippetDescriptors)

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Snippets
      </Typography>
      {isFetching ? (
        <CircularProgress/>
      ) : (
        <Table size="medium">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Conformance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.type}</TableCell>
                <TableCell>{row.compliance}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  )
}