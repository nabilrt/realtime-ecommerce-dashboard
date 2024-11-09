const express = require("express");
const cors = require("cors");
const http = require("http");
const app = express();
const dashboardRouter = require("./route/dashboard");
app.use(express.json()); // to handle JSON bodies

app.use(cors());

const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:5173", // Adjust to your frontend URL
        methods: ["GET", "POST"],
    },
});
global.io = io;

const PORT = 9000;

app.use("/", dashboardRouter);
server.listen(PORT, function () {
    console.log(`Server started at PORT ${PORT}`);
});
