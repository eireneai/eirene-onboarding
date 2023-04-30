// Define a Todo entity and a constructor
// Notice we include a tag whenever possible 
export interface Todo {
  tag: 'Todo'
  id: string
  title: string
  done: boolean
}

// TODO: implement a constructor for the Todo entity
// - this function simply attaches a tag to the props
// object, thus constucting a new Todo entity
export function Todo(props: Omit<Todo, 'tag'>): Todo {
  throw new Error('NotImplemented')
}

export type TodoTable = Record<string, Todo>
