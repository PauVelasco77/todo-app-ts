import { useState } from 'react'
import { Todos } from './assets/components/Todos'
import { type TodoId } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Learn React',
    completed: true
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    completed: false
  },
  {
    id: '3',
    title: 'Learn GraphQL',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <><div className='todoapp'>
      <Todos
        todos={ todos }
        onRemoveTodo={ handleRemove }
      />
    </div>
    </>
  )
}

export default App
