export interface Todo {
  id: string
  title: string
  completed: boolean
}

export type TodoTitle = Pick<Todo, 'title'>
// We can also use Omit to remove properties from an object type.
// export type TodoTitle = Omit<Todo, 'id' | 'completed'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]
