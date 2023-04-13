import { $api } from '@/shared/api/api';
import { Todo } from '@/types';
import { makeAutoObservable, runInAction } from "mobx";

class TodoStore {
    todos: Todo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    getTodosAsync = async () => {
        try {
            const data = await $api.get('/api/todos')
            runInAction(() => {
                this.todos = data.data.data;
            });
        } catch (error) {
            runInAction(() => {
                // error handler
            });
        }
    };

    addTodoAsync = async (title: string) => {
        try {
            await $api.post('/api/todos', {
                data: {title: title}
            })
            runInAction(() => {
                this.getTodosAsync()
            });
        } catch (error) {
            runInAction(() => {
                // error handler
            });
        }
    }

    deleteTodoAsync = async (todo: Todo) => {
        try {
            await $api.delete(`/api/todos/${todo.id}`)
            runInAction(() => {
                this.getTodosAsync()
            });
        } catch (error) {
            runInAction(() => {
                // error handler
            });
        }
    }

    updateTodo(value: string, todo: Todo) {
        todo.title = value;
    }

    updateTodoAsync = async (todo: Todo) => {
        try {
            await $api.put(`/api/todos/${todo.id}`, {data: {title: todo.title}})
            runInAction(() => {
                this.getTodosAsync()
            });
        } catch (error) {
            runInAction(() => {
                // error handler
            });
        }
    }
  }
  
  export const store = new TodoStore();
