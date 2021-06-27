import { getCustomRepository } from "typeorm";
import { TagsRepository } from "../Repository/TagRepository";
import { classToPlain } from "class-transformer";


export class ListTagService{

    async execute(){
        const tagsRepository = getCustomRepository(TagsRepository)

        let tags = await tagsRepository.find()

        return classToPlain(tags)
    }
}