import {SnippetOperations} from '@/data/snippetOperations'
import {createContext, useContext} from 'react'

export type OperationsContextType = {
  snippetOperations: SnippetOperations
}

// @ts-expect-error
export const OperationsContext = createContext<OperationsContextType>(null)

export const OperationsProvider = OperationsContext.Provider

export const useOperations = (): OperationsContextType => useContext(OperationsContext)
