'use client'

import {FC, ReactNode} from 'react'
import {createTheme, ThemeProvider} from '@mui/material/styles'
import {QueryClient} from '@tanstack/query-core'
import {QueryClientProvider} from '@tanstack/react-query'

type GlobalContextType = {
  children: ReactNode
}

const defaultTheme = createTheme()
const queryClient = new QueryClient()

export const GlobalContext: FC<GlobalContextType> = ({children}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThemeProvider>

  )
}