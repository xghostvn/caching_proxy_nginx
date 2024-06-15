import express, {Express, Request, Response} from "express"
import dotenv from "dotenv"

dotenv.config()
const app: Express = express();
app.get('/', function(req : Request, res : Response) {
    res.send("Server running At ....")
})
const port = process.env.PORT || 3000
app.listen(port, function() {
    console.log(`server running at : http://localhost:${port}`)
});


