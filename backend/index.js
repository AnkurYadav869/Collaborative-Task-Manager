const express = require("express");
const taskRouter = require("./router/tasks");
const userRouter = require("./router/users");
const teamRouter = require("./router/teams");
const authRouter = require("./router/auth");
const cors = require("cors");
const app = express();
const port = 2000;
app.use(cors());
app.use(express.static("../frontend/build"));
app.use("/api/auth", authRouter.router);
app.use("/api/tasks", taskRouter.router);
app.use("/api/users", userRouter.router);
app.use("/api/teams", teamRouter.router);

app.listen(port, () => {
    console.log("server started at port " + port);
});
