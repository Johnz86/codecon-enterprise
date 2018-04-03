import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../../entity/User";

/**
 * Saves given post.
 */
export async function userSaveAction(request: Request, response: Response) {

    // get a post repository to perform operations with post
    const userRepository = getManager().getRepository(User);

    // create a real post object from post json object sent over http
    const newUser = userRepository.create(request.body);

    // save received post
    await userRepository.save(newUser);

    // return saved post back
    response.send(newUser);
}