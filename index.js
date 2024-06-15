import express from "express";
import connectWithDB from "./mongo";
import configure from "./Controlers";
import{ handleError} from "./middlewar/handleError";

const app = express()
const port = 3000
app.use(express.json())

connectWithDB()
configure(app)
app.use(handleError)

app.listen(port, () => {
        console.log("test server port - " + port)
  })