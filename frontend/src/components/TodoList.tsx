import axios from 'axios';
import { ITodo } from "../types";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react-lite";
import { store } from "../store";

export interface ToDoListProps {
    todos: ITodo[];
}

function TodoList({todos}: ToDoListProps): JSX.Element {
    const deleteTodoItem = async (id: string) => {
        return await axios.delete(`http://127.0.0.1:1337/api/todos/${id}`)
    }

    if (!store.addTodo.length) {
        return (
            <div>
                TODO LIST IS EMPTY
            </div>
        )
    }
    return (
        <ul className="list-reset tasks__list">
            {store.todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodoItem={deleteTodoItem}/>
            ))}
        </ul>
    );
}

export default observer(TodoList)

