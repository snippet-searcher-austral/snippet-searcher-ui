export const castString = (value: any): string => {
  if (typeof value !== 'string') throw new Error(`Expected ${value} to be an string`)

  return value
}