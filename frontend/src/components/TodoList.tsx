import axios from 'axios';
import { ITodo } from "../types";
import TodoItem from "./TodoItem";

export interface ToDoListProps {
    todos: ITodo[];
}


export function TodoList({todos}: ToDoListProps): JSX.Element {
    const deleteTodoItem = async (id: string) => {
        return await axios.delete(`http://127.0.0.1:1337/api/todos/${id}`)
    }
    return (
        <ul className="list-reset tasks__list">
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodoItem={deleteTodoItem}/>
            ))}
        </ul>
    );
}

