import axios from 'axios';
import { Todo } from "../types";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react-lite";
import { store } from "../store";
import { useEffect } from 'react';

function TodoList(): JSX.Element {

    useEffect(() => {
        store.getTodosAsync();
    },[])

    const deleteTodo = (todo: Todo) => {
        store.deleteTodoAsync(todo);
    }

    const updateTodo = (title: string, id: string) => {
        console.log(title, id)
    }

    if (!store.todos.length) {
        return (
            <div>
                TODO LIST IS EMPTY
            </div>
        )
    }
    return (
        <ul className="list-reset tasks__list">
            {store.todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} deleteTodoItem={deleteTodo} updateTodoItem={updateTodo}/>
            ))}
        </ul>
    );
}

export default observer(TodoList)

