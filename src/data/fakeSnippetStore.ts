import {Compliance, CreateSnippet, SnippetDescriptor, SnippetType} from '@/data/snippet'
import { v4 as uuid } from 'uuid'


export type StoredSnippet = {
  id: string
  name: string
  type: SnippetType
  content: string
  compliance: Compliance
}

const INITIAL_SNIPPETS: StoredSnippet[] = [
  {
    id: '9af91631-cdfc-4341-9b8e-3694e5cb3672',
    name: 'Super Snippet',
    type: 'printscript',
    // language=TypeScript
    content: 'let a : number = 5;\nlet b : number = 5;\n\nprintln(a + b);',
    compliance: 'pending'
  },
  {
    id: 'c48cf644-fbc1-4649-a8f4-9dd7110640d9',
    name: 'Extra cool Snippet',
    type: 'printscript',
    // language=TypeScript
    content: 'let a : number = 5;\nlet b : number = 5;\n\nprintln(a + b);',
    compliance: 'not-compliant',
  },
  {
    id: '34bf4b7a-d4a1-48be-bb26-7d9a3be46227',
    name: 'Boaring Snippet',
    type: 'printscript',
    // language=TypeScript
    content: 'let a : number = 5;\nlet b : number = 5;\n\nprintln(a + b);',
    compliance: 'compliant'
  }
]

export class FakeSnippetStore {
  private readonly snippetMap: Map<string, StoredSnippet> = new Map()

  constructor() {
    INITIAL_SNIPPETS.forEach(snippet => {
      this.snippetMap.set(snippet.id, snippet)
    })
  }

  createSnippet(createSnippet: CreateSnippet): SnippetDescriptor {
    const snippet: StoredSnippet = {
      id: uuid(),
      name: createSnippet.name,
      content: createSnippet.content,
      type: createSnippet.type,
      compliance: 'compliant'
    }

    this.snippetMap.set(snippet.id, snippet)

    return snippet
  }

  listSnippetDescriptors(): SnippetDescriptor[] {
    return Array.from(this.snippetMap, ([_, value]) => value)
  }
}