import { type TodoTitle } from '../../types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className='header'>
      <h1>todos
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
          alt='ts-image'
          style={ { width: '60px', height: 'auto' } }
        />
      </h1>

      <CreateTodo saveTodo={ onAddTodo } />
    </header>
  )
}
