import express from "express";
import accountsRouter from "./apis/accounts/accounts.routers";
import connectdb from "./db/connectdb";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/apis", accountsRouter);

connectdb();

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
