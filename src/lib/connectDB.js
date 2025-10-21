import { MongoClient, ServerApiVersion } from "mongodb";

const MONGODB_URI = process.env.NEXT_MONGODB_URI;
const DB_NAME = process.env.NEXT_MONG0DB_DB_NAME || "UrenCarAccessoriesDB";

if (!MONGODB_URI) {
    throw new Error("MongoDb URI is invalid");
}

let cachedClient = null;
let cachedDb = null;

export const connectDB = async() => {
    if (cachedClient && cachedDb) {
        return cachedDb;
    }

    try {
        const client = new MongoClient(MONGODB_URI, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            },
        });

        await client.connect();
        const db = client.db(DB_NAME);

        cachedClient = client;
        cachedDb = db;

        return db;
    } catch (error) {
        throw new Error("MongoDb connection failed", error);
    }
}