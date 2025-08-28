import { Router } from "express";
import {
  getAllAccounts,
  createAccount,
  updateAccount,
  deleteAccount,
} from "./accounts.controllers";

const router = Router();

router.get("/accounts", getAllAccounts);
router.post("/accounts", createAccount);
router.put("/accounts/:accountId", updateAccount);
router.delete("/accounts/:accountId", deleteAccount);

export default router;
