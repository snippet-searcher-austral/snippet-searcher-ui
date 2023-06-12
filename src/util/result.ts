export type Failure<E, S> = {
  kind: 'failure',
  error: E
}

export type Success<E, S> = {
  kind: 'success',
  error: S
}

export type Result<E, S> = Failure<E, S> | Success<E, S>

export const isSuccess = <E, S>(result: Result<E, S>): result is Success<E, S> => result.kind === 'success'

export const isFailure = <E, S>(result: Result<E, S>): result is Failure<E, S> => result.kind === 'failure'