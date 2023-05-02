// STRUCT

// IMMUTABLE UPDATES IN TYPESCRIPT
// all these functions should operate immutably meaning they always 
// return a new record and never modify the original record  
// https://wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/

// PURE FUNCTIONS
// all these functions should also be pure functions, meaning
// - they depend only on the data provided as parameters
// - they do not touch mutable state in any way 
// - they always return the same value given the same parameters

// TODO: implement immutable removeAt
// - this function should remove the target key from a
// provided record
// - if the target key does not exist in the record,
// then the behavior of the function is equivelent to
// deep copy
export function removeAt<R extends Record<string, unknown>>(
  record: R,
  key: string
): R {
  throw new Error('NotImplemented')
}

// TODO: implement immutable insertAt
// - this function should insert a value at the target 
// key in the provided record
// - if the target key already exists in the record,
// then the its value is updated using the new value
export function insertAt<A>(
  record: Record<string, A>,
  key: string,
  value: A
) {
  throw new Error('NotImplemented')
}

// TODO: implement immutable updateAt
// - update a value in the record at the target key
// using the provided function
// - if the target key does not exist in the record,
// then the behavior of the function is equivelent to
// deep copy
export function updateAt<A>(
  record: Record<string, A>,
  key: string,
  fn: (a: A) => A
) {
  throw new Error('NotImplemented')
}
