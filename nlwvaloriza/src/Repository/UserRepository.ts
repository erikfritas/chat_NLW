import { EntityRepository, Repository } from "typeorm"
import {Users} from "../entity/User"


@EntityRepository(Users)
export class UserRepository extends Repository<Users>{

}

