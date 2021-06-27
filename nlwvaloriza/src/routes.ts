import { Router } from "express"
import { CreateUserController } from "./controller/CreateUserController"
import { CreateTagController } from "./controller/CreateTagController"
import { AuthenticateUserController } from "./controller/AuthenticateUserController"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { CreateComplimentController } from "./controller/CreateComplimentController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { ListUserSendComplimentsController } from "./controller/ListUserSendController"
import { ListUserReceiveComplimentsController } from "./controller/ListUserReceiveController"
import { ListTagController } from "./controller/ListTagsController"
import { ListUserController } from "./controller/ListUserController"


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiveController = new ListUserReceiveComplimentsController()
const listUserSendController = new ListUserSendComplimentsController()
const listTagsController = new ListTagController()
const listUserController = new ListUserController()


router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliment", ensureAuthenticated, createComplimentController.handle)


router.get("/users/send", ensureAuthenticated, listUserSendController.handle)
router.get("/users/receive", ensureAuthenticated, listUserReceiveController.handle)

router.get("/users", ensureAuthenticated, listUserController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)

export {
    router
}

