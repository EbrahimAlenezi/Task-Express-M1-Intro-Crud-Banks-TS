import { Request, Response } from "express";
import { accounts } from "../../accounts";

export const getAllAccounts = (_req: Request, res: Response) => {
  res.status(200).json(accounts);
};

export const createAccount = (req: Request, res: Response) => {
  const { username } = req.body as { username?: string };
  const newAccount = { id: Date.now(), username, funds: 0 };
  accounts.push(newAccount);
  res.status(201).json(newAccount);
};

export const updateAccount = (req: Request, res: Response) => {
  const id = Number(req.params.accountId);
  const i = accounts.findIndex((a: { id: number }) => a.id === id);
  if (i === -1) return res.status(404).end();
  const { username, funds } = req.body as { username?: string; funds?: number };
  accounts[i] = { ...accounts[i], username, funds };
  res.status(200).json(accounts[i]);
};

export const deleteAccount = (req: Request, res: Response) => {
  const id = Number(req.params.accountId);
  const i = accounts.findIndex((a: { id: number }) => a.id === id);
  if (i === -1) return res.status(404).end();
  accounts.splice(i, 1);
  res.status(204).end();
};
