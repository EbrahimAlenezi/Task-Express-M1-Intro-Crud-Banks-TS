import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import Account from "../../db/models/Account";

export const getAllAccounts = async (_req: Request, res: Response) => {
  try {
    const all = await Account.find().select("-createdAt -updatedAt");
    res.status(200).json(all);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Server error" });
  }
};

export const createAccount = async (req: Request, res: Response) => {
  try {
    const { username, funds } = req.body ?? {};
    if (!username)
      return res.status(400).json({ message: "username is required" });
    const doc = await Account.create({ username, funds });
    res.status(201).json(doc);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Server error" });
  }
};

export const updateAccount = async (req: Request, res: Response) => {
  try {
    const { accountId } = req.params;
    if (!isValidObjectId(accountId))
      return res.status(404).json({ message: "Not found" });
    const exist = await Account.findById(accountId);
    if (!exist) return res.status(404).json({ message: "Not found" });
    await Account.updateOne({ _id: accountId }, req.body, {
      runValidators: true,
    });
    res.sendStatus(204);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Server error" });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const { accountId } = req.params;
    if (!isValidObjectId(accountId))
      return res.status(404).json({ message: "Not found" });
    const exist = await Account.findById(accountId);
    if (!exist) return res.status(404).json({ message: "Not found" });
    await Account.deleteOne({ _id: accountId });
    res.sendStatus(204);
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Server error" });
  }
};
