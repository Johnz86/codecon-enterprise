
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

export interface NewTodo {
    text: string;
    completed: boolean;
}

export enum ActionType {
    ADD_TODO,
    ADD_ALL_TODOS,
    DELETE_TODO,
    COMPLETE_TODO,
    UNCOMPLETE_TODO,
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}