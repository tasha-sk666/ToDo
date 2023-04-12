import  TodoList  from '@/components/TodoList';
import TodoNew from '@/components/TodoNew';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useEffect, useState } from 'react';


interface HomeProps {
  error: string
}

const Home = ({ error }: HomeProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
      setMounted(true)
  }, []);

  if (!mounted) {
      return null
  }
  if (error) {
    return <div>An error occured: {error}</div>;
  }
  return (
    <div className={classNames('app', {}, [theme])}>
    <header className='header container'>
      <h1 className="header__title">Todo App</h1>
      <ThemeSwitcher />
    </header>
    <div className="task">
      <section className='todo container'>
        {process.env.NODE_ENV === 'development' && <TodoNew />}
        <TodoList />
      </section>
    </div>
    </div>

  );
};

export default Home;