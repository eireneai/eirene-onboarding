import * as A from '../data/array.js'

// OBSERVABLE

// The observable is an abstraction of many values over time
// ___________|_Values__|_Time__
// constant   | one     | sync
// array      | many    | sync
// promise    | one     | async
// observable | many    | async
// it is paramaterized by a single type A, similarly to
// Array<A>, Promise<A>, etc.

// We'll use it as a message bus so that different systems
// can communicate with one another

// Since js doesnt have one built in, we'll write a simple
// implementation according to this interface:

export type ListenerCallback<A> = (a: A) => void

export interface Observable<A> {
  dispatch: (a: A) => void
  addListener: (fn: ListenerCallback<A>) => void
}

// TODO: implement observable constructor
// - the observable should encapsulate two mutable lists,
// one for all values that have been dispatched, and one
// for all listeners that have been added
// - when a listener is added, add it to the list of listeners
// - in addition to registering a new listener, we should also
// replay all the past events to each newly registered listener,
// because that listener missed out on past events, and we want to
// get them up to date (hint: https://www.w3schools.com/jsref/jsref_foreach.asp)
// - when a value is dispatched, add it to the list of values and
// notify all listeners

export function Observable<A>(initialValues: A[]): Observable<A> {
  const values = A.deepCopy(initialValues)
  const listeners: ListenerCallback<A>[] = []
  return {
    addListener: (cb) => {
      throw new Error('NotImplemented')
    },
    dispatch: (a) => {
      throw new Error('NotImplemented')
    },
  }
}
