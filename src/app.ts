import express from "express";
import connectdb from "./db/connectdb";
import accountsRouter from "./apis/accounts/accounts.routers";
import authorsRouter from "./apis/authors/authors.routers";
import postsRouter from "./apis/posts/posts.routers";
import tagsRouter from "./apis/tags/tags.routers";

const app = express();
const PORT = 8000;

app.use(express.json());
app.use("/apis", accountsRouter);
app.use("/apis", authorsRouter);
app.use("/apis", postsRouter);
app.use("/apis", tagsRouter);

connectdb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.error("DB connection failed:", e);
    process.exit(1);
  });
