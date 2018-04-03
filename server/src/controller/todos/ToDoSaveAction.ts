import { Request, Response } from "express";
import { getManager } from "typeorm";
import { ToDo } from "../../entity/ToDo";

/**
 * Saves given todo.
 */
export async function toDoSaveAction(request: Request, response: Response) {

    // get a todo repository to perform operations with todo
    const toDoRepository = getManager().getRepository(ToDo);

    // create a real todo object from todo json object sent over http
    const newUser = toDoRepository.create(request.body);

    // save received todo
    await toDoRepository.save(newUser);

    // return saved todo back
    response.send(newUser);
}