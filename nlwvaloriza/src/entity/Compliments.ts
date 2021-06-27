import { PrimaryColumn, Column, Entity, CreateDateColumn, JoinColumn, ManyToOne } from "typeorm"
import { v4 as uuid } from "uuid"
import { Tag } from "./Tag"
import { Users } from "./User"


@Entity("compliments")
export class Compliment {

    @PrimaryColumn()
    readonly id: string

    @Column()
    user_sender: string

    @JoinColumn({name: "user_sender"})
    @ManyToOne(() => Users)
    userSender: Users

    @Column()
    user_receiver: string

    @JoinColumn({name: "user_receiver"})
    @ManyToOne(() => Users)
    userReceiver: Users

    @Column()
    tag_id: string

    @JoinColumn({name: "tag_id"})
    @ManyToOne(() => Tag)
    tag: Tag

    @Column()
    message: string

    @CreateDateColumn()
    created_at: Date

    constructor(){
        if (!this.id){
            this.id = uuid()
        }
    }

}






