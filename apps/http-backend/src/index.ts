import express from "express";
const app = express();
import indexRoutes from "./routes/index.route";
app.use("/", indexRoutes);

app.listen(3001, () => {
  console.log(`Server is up on http://localhost:3001`);
});
