import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

interface IPayload{
    sub: string
}


export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    
    const authToken = request.headers.authorization

    // Receber token
    if (!authToken){
        // {message: "Token missing"}
        return response.status(401).end()
    }

    const token = authToken.split(" ")[1]


    try{
        // Validar se o token está preenchido
        const { sub } = verify(token, "df9a43f275839119ae1a5938ca596cd8") as IPayload

        // Recuperar informações do usuário
        request.user_id = sub
        
        
        return next()
    } catch(err){
        return response.status(401).end()
    }



}


