import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";



export class ListUserController{

    async handle(request: Request, response: Response){
        const listUserService = new ListUserService()

        const users = await listUserService.execute()

        return response.json(users)
    }
}
