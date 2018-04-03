import { postGetAllAction } from "./controller/posts/PostGetAllAction";
import { postGetByIdAction } from "./controller/posts/PostGetByIdAction";
import { postSaveAction } from "./controller/posts/PostSaveAction";
import { userGetAllAction } from "./controller/users/UserGetAllAction";
import { userGetByIdAction } from "./controller/users/UserGetByIdAction";
import { userSaveAction } from "./controller/users/UserSaveAction";
import { todoGetAllAction } from "./controller/todos/ToDoGetAllAction";
import { toDoGetByIdAction } from "./controller/todos/ToDoGetByIdAction";
import { toDoSaveAction } from "./controller/todos/ToDoSaveAction";
import { toDoRemoveByIdAction } from "./controller/todos/ToDoRemoveByIdAction";
import { toDoCompleteByIdAction } from "./controller/todos/ToDoCompleteByIdAction";
import { toDoUncompleteByIdAction } from "./controller/todos/ToDoUncompleteByIdAction";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/posts",
        method: "get",
        action: postGetAllAction
    },
    {
        path: "/posts/:id",
        method: "get",
        action: postGetByIdAction
    },
    {
        path: "/posts",
        method: "post",
        action: postSaveAction
    },
    {
        path: "/users",
        method: "get",
        action: userGetAllAction
    },
    {
        path: "/users/:id",
        method: "get",
        action: userGetByIdAction
    },
    {
        path: "/users",
        method: "post",
        action: userSaveAction
    },
    {
        path: "/todo",
        method: "get",
        action: todoGetAllAction
    },
    {
        path: "/todo/:id",
        method: "get",
        action: toDoGetByIdAction
    },
    {
        path: "/todo",
        method: "post",
        action: toDoSaveAction
    },
    {
        path: "/todo/:id",
        method: "delete",
        action: toDoRemoveByIdAction
    },
    {
        path: "/todo/:id/complete",
        method: "patch",
        action: toDoCompleteByIdAction
    },
    {
        path: "/todo/:id/uncomplete",
        method: "patch",
        action: toDoUncompleteByIdAction
    },
];