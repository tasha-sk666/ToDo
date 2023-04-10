import TodoItem from '@/components/TodoItem';
import { TodoList } from '@/components/TodoList';
import { ITodo } from '@/types';
import axios from 'axios';


interface HomeProps {
  todos: ITodo[]
  error: string
}

const Home = ({ todos, error }: HomeProps) => {

  const addTodoItem = async () => {
    return await axios.post(`http://127.0.0.1:1337/api/todos`, {title: 'asdfa'})
  }

  if (error) {
    return <div>An error occured: {error}</div>;
  }
  return (
    <>
    <header className='header container'>
      <h1 className="header__title">Todo App</h1>
    </header>
    <div className="task">
      <section className='todo container'>
      <form className="todo__form">
        <label className="todo__field">
          <input type="text" className="todo__input" name="title" placeholder="Add new todo here..." />
        </label>
        <button type="submit" className="btn-reset btn" onClick={() => addTodoItem()}>Add todo</button>
      </form>
        <TodoList todos={todos}/>
      </section>
    </div>
    </>

  );
};

Home.getInitialProps = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:1337/api/todos');
    const todos = res.data.data;
    return { todos };
  } catch (error) {
    return { error };
  }
};

export default Home;