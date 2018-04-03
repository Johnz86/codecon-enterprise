import { Action, ActionType, Todo, NewTodo } from '../model/model';
import { readAllTodos, createTodo, deleteTodo as removeTodo, completeTodo, uncompleteTodo } from '../services/todo';

export function addTodo(todo: Todo): Action<Todo> {
    return {
        type: ActionType.ADD_TODO,
        payload: todo
    };
}

export function addAllTodos(todos: Array<Todo>): Action<Array<Todo>> {
    return {
        type: ActionType.ADD_ALL_TODOS,
        payload: todos
    };
}

export function requestTodos() {
    return (dispatch: Function) => {
        readAllTodos()
            .then(todos => dispatch(addAllTodos(todos)))
            .catch(error => dispatch(addAllTodos([])));
    };
}

export function requestCreateTodo(newTodo: NewTodo) {
    return (dispatch: Function) => {
        createTodo(newTodo).then(todo => dispatch(addTodo(todo)));
    };
}

export function requestDeleteTodo(todoId: number) {
    return (dispatch: Function) => {
        removeTodo(todoId).then(isSuccess => dispatch({
            type: ActionType.DELETE_TODO,
            payload: todoId
        }));
    };
}

export function requestCompleteTodo(todoId: number) {
    return (dispatch: Function) => {
        completeTodo(todoId).then(isSuccess => dispatch({ type: ActionType.COMPLETE_TODO, payload: todoId }));
    };
}

export function requestUncompleteTodo(todoId: number) {
    return (dispatch: Function) => {
        uncompleteTodo(todoId).then(isSuccess => dispatch({ type: ActionType.UNCOMPLETE_TODO, payload: todoId }));
    };
}
