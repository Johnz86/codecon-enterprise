import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../../entity/User";

/**
 * Loads all user from the database.
 */
export async function userGetAllAction(request: Request, response: Response) {

    // get a user repository to perform operations with post
    const userRepository = getManager().getRepository(User);

    // load a user by a given post id
    const user = await userRepository.find();

    // return loaded posts
    response.send(user);
}