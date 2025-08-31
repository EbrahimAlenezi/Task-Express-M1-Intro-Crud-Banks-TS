import { Schema, model } from "mongoose";

const AccountSchema = new Schema({
  username: { type: String, required: true, trim: true },
  funds: { type: Number, default: 0 },
});

const Account = model("Account", AccountSchema);

export default Account;
