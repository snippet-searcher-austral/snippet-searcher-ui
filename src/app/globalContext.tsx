'use client'

import {FC, ReactNode} from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {QueryClient} from '@tanstack/query-core'
import {QueryClientProvider} from '@tanstack/react-query'
import {OperationsContextType, OperationsProvider} from '@/data/operationsContext'
import {ApiSnippetOperations} from "@/data/api/apiSnippetOperations";

type GlobalContextType = {
  children: ReactNode
}

const defaultTheme = createTheme()
const queryClient = new QueryClient()
const operations: OperationsContextType = {
  snippetOperations: new ApiSnippetOperations()
}

export const GlobalContext: FC<GlobalContextType> = ({children}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        <OperationsProvider value={operations}>
          {children}
        </OperationsProvider>
      </QueryClientProvider>
    </ThemeProvider>

  )
}