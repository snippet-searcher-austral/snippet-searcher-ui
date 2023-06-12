import {FakeSnippetStore} from '@/data/fakeSnippetStore'
import {z} from 'zod'

export const ComplianceSchema = z.enum(['pending', 'failed', 'not-compliant', 'compliant'])
export type Compliance = z.infer<typeof ComplianceSchema>

export const SnippetTypeSchema = z.enum(['printscript'])
export type SnippetType = z.infer<typeof SnippetTypeSchema>

export const SnippetDescriptorSchema = z.object({
  id: z.string(),
  name: z.string(),
  type: SnippetTypeSchema,
  compliance: ComplianceSchema
})
export type SnippetDescriptor = z.infer<typeof SnippetDescriptorSchema>

export const CreateSnippetSchema = z.object({
  name: z.string(),
  type: SnippetTypeSchema,
  content: z.string()
})
export type CreateSnippet = z.infer<typeof CreateSnippetSchema>

// The purpose of this "store" is to simulate a limited backend with storage.
const fakeSnippetStore = new FakeSnippetStore()

export const listSnippetDescriptors = (): Promise<SnippetDescriptor[]> => new Promise(resolve => {
  setTimeout(() => resolve(fakeSnippetStore.listSnippetDescriptors()), 1000)
})

export const createSnippet = (createSnippet: CreateSnippet): Promise<SnippetDescriptor> => new Promise(resolve => {
  setTimeout(() => resolve(fakeSnippetStore.createSnippet(createSnippet)), 1000)
})

