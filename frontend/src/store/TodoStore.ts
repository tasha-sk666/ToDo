import { Todo } from '@/types';
import { makeAutoObservable } from "mobx";

class TodoStore {
    todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo: Todo) {
        this.todos.push(todo)
    }
  }
  
  export const store = new TodoStore();
