import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../Repository/ComplimentsRepository";
import { UserRepository } from "../Repository/UserRepository"


interface ICreateComplimentService{
    tag_id: string
    user_sender: string
    user_receiver: string
    message: string
}


export class CreateComplimentService {

    async execute({tag_id, user_sender, user_receiver, message}: ICreateComplimentService){
        const complimentsRepository = getCustomRepository(ComplimentsRepository)
        const userRepository = getCustomRepository(UserRepository)

        if (user_sender === user_receiver){
            throw new Error("Incorrect user receiver...")
        }

        const userReceiverExists = await userRepository.findOne(user_receiver)

        if (!userReceiverExists){
            throw new Error("User receiver not exists...")
        }

        const compliment = complimentsRepository.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        })

        await complimentsRepository.save(compliment)

        return compliment


    }

}

