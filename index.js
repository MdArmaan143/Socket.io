import express from "express"
import { createServer } from "node:http";
import { Server } from "socket.io";




const app = express();
const server = createServer(app);
const io =new Server(server);

//socket connection
io.on('connection', (socket) => {
  socket.on("user-message", (message)=>{
    io.emit("message", message);
  });
});

app.use(express.static("public"));


app.get("/",(req,res)=>{
   return res.sendFile("./public/index.html");
})




const start = async()=>{
    server.listen(3000,()=>{
        console.log("SERVER RUNNING AT PORT 3000");
    })

}

start();