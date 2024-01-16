const express = require("express");
const taskRouter = require("./router/tasks");
const userRouter = require("./router/users");
const teamRouter = require("./router/teams");
const authRouter = require("./router/auth");
const app = express();
const port = 3000;
app.use("/api/auth", authRouter.router);
app.use("/api/tasks", taskRouter.router);
app.use("/api/users", userRouter.router);
app.use("/api/teams", teamRouter.router);

app.listen(port | 3000, () => {
    console.log("server started at port" + port);
});
