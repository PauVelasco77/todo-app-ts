import { useState } from 'react'
import { Todos } from './assets/components/Todos'
import { type FilterValue, type TodoId, type Todo as TodoType } from './types'
import { TODO_FILTERS } from './consts'
import { Footer } from './assets/components/Footer'

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
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = completed
      }
      return todo
    }
    )
    setTodos(newTodos)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <><div className='todoapp'>
      <Todos
        todos={ filteredTodos }
        onRemoveTodo={ handleRemove }
        onToggleCompleted={ handleCompleted }
      />
      <Footer
        activeCount={ activeCount }
        completedCount={ completedCount}
        filterSelected={ filterSelected }
        onClearCompleted={ handleRemoveAllCompleted }
        handleFilterChange={ handleFilterChange }
      />
    </div>
    </>
  )
}

export default App
