import { Request, Response } from "express";
import { getManager } from "typeorm";
import { ToDo } from "../../entity/ToDo";

/**
 * Loads all user from the database.
 */
export async function todoGetAllAction(request: Request, response: Response) {

    // get a todo repository to perform operations with post
    const toDoRepository = getManager().getRepository(ToDo);

    // load a todo by a given post id
    const todo = await toDoRepository.find();

    // return loaded posts
    response.send(todo);
}