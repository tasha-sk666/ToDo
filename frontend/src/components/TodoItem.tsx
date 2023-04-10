import { ITodo } from "../types";

interface TodoItemProps {
    todo: ITodo,
    deleteTodoItem: (id: string) => void,

}

export default function TodoItem({ todo, deleteTodoItem}: TodoItemProps): JSX.Element {
   return (
    <li key={todo.id} className="task">
        <div className="task__text">{todo.attributes.title}</div>
        <button className="btn-reset btn btn-edit">Edit</button>
        <button className="btn-reset btn btn-delete" onClick={() => deleteTodoItem(todo.id)}>Del</button>
    </li>
   );
}