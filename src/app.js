import express from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import categoryRouter from "./routes/category.routes.js";
import courseRouter from "./routes/course.routes.js";
import subCategoryRouter from "./routes/subCategory.routes.js";
import setUpMiddleware from "./middlewares/middleware.js";

const PORT = 3000;
const app = express()
setUpMiddleware(app);

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/course", courseRouter);
app.use("/api/sub", subCategoryRouter);

app.get("/", (req, res) => {
    res.json({
        "name": "idris", 
        message: "welcome here on board"
    })
});

app.listen(PORT, () => { console.log(`app currently running on port ${PORT}`) });

export default app;


