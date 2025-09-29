import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("❌ Please add your Mongo URI to .env.local");
}

// 🔹 Tell TypeScript that we are adding a custom property to `global`
declare global {
  // eslint-disable-next-line no-var
  var _mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  } | undefined;
}

// ✅ Use the global cache (avoids multiple connections during hot reloads in Next.js)
let cached = global._mongoose;

if (!cached) {
  cached = global._mongoose = { conn: null, promise: null };
}

export async function connectToDatabase(): Promise<Mongoose> {
  if (!cached) {
    throw new Error("MongoDB cache is not initialized.");
  }
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "eposter_db", // change if needed
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
