import { postMethod, deleteMethod, patchMethod } from './fetch';
import { Todo, NewTodo } from '../model/model';

export const createTodo = async (todo: NewTodo): Promise<Todo> => {
    const response = await fetch('/todo', postMethod(todo));
    return response.json();
};

export const readAllTodos = async (): Promise<Array<Todo>> => {
    const response = await fetch('/todo/');
    return response.json();
};

export const readTodo = async (id: number): Promise<Todo> => {
    const response = await fetch(`/todo/${id}`);
    return response.json();
};

export const uncompleteTodo = async (id: number): Promise<Todo> => {
    const response = await fetch(`/todo/${id}/uncomplete`, patchMethod({}));
    return response.json();
};

export const completeTodo = async (id: number): Promise<Todo> => {
    const response = await fetch(`/todo/${id}/complete`, patchMethod({}));
    return response.json();
};

export const deleteTodo = async (id: number): Promise<Boolean> => {
    const response = await fetch(`/todo/${id}`, deleteMethod({}));
    return response.status === 200;
};