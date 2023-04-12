import { Todo } from '@/types';
import { makeAutoObservable } from "mobx";

class TodoStore {
    todos: Todo[] = [
        {id: '1', title: 'First todo'},
        {id: '2', title: 'Second todo'},
        {id: '3', title: 'Tird todo'},
        {id: '4', title: 'asdf'},
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }

    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter((item) => item.id !== todo.id)
    }

    updateTodo(value: string, todo: Todo) {
        todo.title = value;
    }
  }
  
  export const store = new TodoStore();
