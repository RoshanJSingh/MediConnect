import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI; // ✅ Don't append anything
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI)
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  console.log("✅ Connected to MongoDB");
  return cached.conn;
};


export default connectDB;
