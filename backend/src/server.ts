import express,{type Request, type Response} from "express"
import { error, log } from "node:console"
import { randomUUID } from "node:crypto"
import { pool } from "./database/connection.js"

const app = express()
const port = 3000

app.use(express.json())

app.get("/health", (_request: Request, response: Response) => {
    return response.json({
        status: "ok"
    })
})

app.get("/cliente", async (_request: Request, response: Response) => {
    try {
        const res = await pool.query("SELECT * FROM clientes")

        response.json(res.rows)
    } catch (error) {
        console.error(error);
    }
})

app.get("/animais", async (_request: Request, response: Response) => {
    try {
        const res = await pool.query("SELECT * FROM animais")

        response.json(res.rows)
    } catch (error) {
        console.error(error);
    }
})

interface CreateUserBody {
    name: string;
}

app.post("/users", (request: Request<object, object, CreateUserBody>, response: Response) => {
    const name = request.body.name?.trim()
    if(!name) {
        return response.status(400).json({
            error: "Name is required"
        })
    }

    return response.status(201).json({
        is: randomUUID(),
        name
    })
})

app.listen(port, ()=> {
    console.log(`API rondando em http://localhost:${port}`)
})