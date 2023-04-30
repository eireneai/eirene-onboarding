// REDUCER
// - a reducer takes a state (S) and an event (A)
// and returns a new state
// - see the Array.reduce documentation:
// https://www.w3schools.com/jsref/jsref_reduce.asp

export interface Reducer<S, A> {
  (s: S, a: A): S
}

// PROJECTION
// - a projection maintains a state (S) that can be accessed
// via getState
// - the state can be updated by calling processEvent and
// providing an event (A)

export interface Projection<S, A> {
  processEvent: (a: A) => void
  getState: () => S
}

// TODO: implement the projection constructor
// - this function should build an instance of a projection
// - use closure to encapsulate a mutable variable that
// contains the current state
// - initialize the variable with the provided initialState
// - processEvent should use the provided reducer to 'step'
// the value of the state forward

export function Projection<S, A>(
  reducer: Reducer<S, A>
): (initialState: S) => Projection<S, A> {
  return (initialState) => {
    let state = initialState
    return {
      processEvent: (event) => {
        throw new Error('NotImplemented')
      },
      getState: () => {
        throw new Error('NotImplemented')
      },
    }
  }
}
