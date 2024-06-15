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

app.get("/caching_test", function(req : Request, res : Response) {
    res.setHeader('Cache-Control', 'public, max-age=300')
    res.send({
        "user": {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "address": {
                "street": "123 Main St",
                "city": "Anytown",
                "state": "CA",
                "postalCode": "12345",
                "country": "USA"
            },
            "phoneNumbers": [
                {
                    "type": "home",
                    "number": "555-1234"
                },
                {
                    "type": "work",
                    "number": "555-5678"
                }
            ],
            "hobbies": [
                "reading",
                "hiking",
                "coding"
            ],
            "isActive": true,
            "createdAt": "2024-06-15T10:00:00Z"
        }
    });
});