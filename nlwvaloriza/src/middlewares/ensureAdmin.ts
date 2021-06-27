import { Request, Response, NextFunction } from "express"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../Repository/UserRepository"


export async function ensureAdmin(request: Request, response: Response, next: NextFunction){

    // Verificar se o usuário é um admin

    const { user_id } = request
    console.log(user_id)

    const userRepository = getCustomRepository(UserRepository)

    const { admin } = await userRepository.findOne(user_id)

    if (admin){
        return next()
    }

    return response.status(401).json({
        error: "Unauthorized",
    })

}
