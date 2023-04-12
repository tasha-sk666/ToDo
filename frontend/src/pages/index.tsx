import TodoItem from '@/components/TodoItem';
import  TodoList  from '@/components/TodoList';
import TodoNew from '@/components/TodoNew';
import { Todo } from '@/types';
import axios from 'axios';


interface HomeProps {
  error: string
}

const Home = ({ error }: HomeProps) => {

  // const addTodoItem = async () => {
  //   return await axios.post(`http://127.0.0.1:1337/api/todos`, {title: 'asdfa'})
  // }

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
        {process.env.NODE_ENV === 'development' && <TodoNew />}
        <TodoList />
      </section>
    </div>
    </>

  );
};

// Home.getInitialProps = async () => {
//   try {
//     const res = await axios.get('http://127.0.0.1:1337/api/todos');
//     const todos = res.data.data;
//     return { todos };
//   } catch (error) {
//     return { error };
//   }
// };

export default Home;