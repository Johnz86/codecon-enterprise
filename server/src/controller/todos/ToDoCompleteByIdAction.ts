import { Request, Response } from "express";
import { getManager } from "typeorm";
import { ToDo } from "../../entity/ToDo";

/**
 * Marks todo as complete by a given id.
 */
export async function toDoCompleteByIdAction(request: Request, response: Response) {

    // get a todo repository to perform operations with todo
    const toDoRepository = getManager().getRepository(ToDo);

    // load a todo by a given post id
    const todo = await toDoRepository.findOne(request.params.id);

    // if todo was not found return 404 to the client
    if (!todo) {
        response.status(404);
        response.end();
        return;
    }

    todo.completed = true;

    // update the todo in database
    await toDoRepository.save(todo);

    // return loaded post
    response.send(todo);
}
