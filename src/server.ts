import app from "./app.js"
// import { Server } from "http";

const PORT: Number = Number(process.env.PORT) || 3001;

const initServer:VoidFunction = async () => {
app.listen(PORT,() => {
    console.log(`Server running at port : ${PORT}`);
})
}

initServer();