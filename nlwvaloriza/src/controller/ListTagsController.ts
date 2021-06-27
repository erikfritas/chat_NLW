import { Request, Response } from "express";
import { ListTagService } from "../services/ListTagService";



export class ListTagController{

    async handle(request: Request, response: Response){
        const listTagService = new ListTagService()

        const tags = await listTagService.execute()

        return response.json(tags)
    }
}