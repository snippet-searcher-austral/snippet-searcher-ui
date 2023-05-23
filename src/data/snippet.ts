export type Compliance = 'pending' | 'failed' | 'not-compliant' | 'compliant'

export type SnippetDescriptor = {
  id: string
  name: string
  type: string
  compliance: Compliance
}

export const getSnippetDescriptors = (): Promise<SnippetDescriptor[]> => new Promise(resolve => {
  setTimeout(() => resolve([
    {
      id: 'jasjd',
      name: 'Super Snippet',
      type: 'PrintScript',
      compliance: 'pending'
    },
    {
      id: 'adhsjl',
      name: 'Extra cool Snippet',
      type: 'PrintScript',
      compliance: 'not-compliant',
    },
    {
      id: 'xcoaos',
      name: 'Boaring Snippet',
      type: 'PrintScript',
      compliance: 'compliant'
    }
  ]), 1000)
})

