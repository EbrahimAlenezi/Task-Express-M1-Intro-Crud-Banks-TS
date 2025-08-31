import mongoose from "mongoose";

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ibrahemalwteed_db_user:s0Xp6V7OXMyjzp6q@cluster0.khufaw6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected:", conn.connection.host);
  } catch (err) {
    console.error("Somthing went wrong from mongodb:", err);
    process.exit(1);
  }
};

export default connectdb;
