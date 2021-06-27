import { Request, Response } from "express"
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService"


export class ListUserSendComplimentsController{

    async handle(request: Request, response: Response){
        const { user_id } = request

        const userSendComplimentService = new ListUserSendComplimentsService()

        const compliments = await userSendComplimentService.execute(user_id)

        return response.json(compliments)
    }
}