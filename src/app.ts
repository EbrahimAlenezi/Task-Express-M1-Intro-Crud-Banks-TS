import express from "express";
import accountsRouter from "./apis/accounts/accounts.routers";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/apis", accountsRouter);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
