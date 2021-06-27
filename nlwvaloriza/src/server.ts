import "reflect-metadata"
import express, { Request, Response, NextFunction, json } from "express"
import "express-async-errors"
import { router } from "./routes"

import "./database"

const app = express()

app.use(express.json())

app.use(router)


// midleware
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error){
        return response.status(400).json({
            error: err.message
        })
    }

    return response.status(500).json({
        status: "error",
        message: "Internal server error."
    })

})


// primeiro parametro é a porta, e o segundo é o que será executado após o servidor ser inicializado
app.listen(80, () => console.log("Server is running..."))

