import { getCustomRepository } from "typeorm";
import { UserRepository } from "../Repository/UserRepository"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"


interface IAuthenticateUserService{
    email: string
    password: string
}

export class AuthenticateUserService {

    async execute({email, password}: IAuthenticateUserService) {
        const userRepository = getCustomRepository(UserRepository)

        // Verificar se email existe
        const user = await userRepository.findOne({
            email
        })

        if (!user){
            throw new Error("Email/Password incorrect!")
        }

        // Verificar se senha está correta

        // Password Match
        if (!await compare(password, user.password)){
            throw new Error("Email/Password incorrect!")
        }

        // Gerar token

        const token = sign({
            email: user.email
        }, "df9a43f275839119ae1a5938ca596cd8", {
            subject: user.id,
            expiresIn: "7d"
        })

        return token

    }

}


