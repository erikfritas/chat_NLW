import { Repository, EntityRepository } from "typeorm"
import { Compliment } from "../entity/Compliments"


@EntityRepository(Compliment)
export class ComplimentsRepository extends Repository<Compliment> {

}

