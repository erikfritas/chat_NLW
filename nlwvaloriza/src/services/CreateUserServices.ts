import { getCustomRepository } from "typeorm"
import { UserRepository } from "../Repository/UserRepository"
import { hash } from "bcryptjs"


interface IUserRequest {
    name: string
    email: string
    admin?: boolean
    password: string
}


export class CreateUserService{

    async execute({ name, email, admin, password } : IUserRequest) {
        const userRepository = getCustomRepository(UserRepository)

        if (!email){
            throw new Error("Email can't be void")
        }


        const userAlreadyExists = await userRepository.findOne({
            email
        })

        if (userAlreadyExists) {
            throw new Error("User already exists")
        }

        const passwHash = await hash(password, 8)

        const user = userRepository.create({
            name,
            email,
            admin,
            password: passwHash
        })

        await userRepository.save(user)

        return user
    }
}

