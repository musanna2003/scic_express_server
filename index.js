import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const client = new MongoClient(process.env.MONGO_URI);
let productsCollection;

async function connectDB() {
  try {
    await client.connect();
    const db = client.db("scic"); // Database name
    productsCollection = db.collection("products"); // Collection name
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
  }
}
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

// ➕ Add Product
app.post("/products", async (req, res) => {
  try {
    const product = req.body;
    const result = await productsCollection.insertOne(product);
    res.json({ success: true, insertedId: result.insertedId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 📦 Get All Products
app.get("/products", async (req, res) => {
  try {
    const products = await productsCollection.find().toArray();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// 🔍 Get Single Product
app.get("/products/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productsCollection.findOne({ _id: new ObjectId(id) });
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Product not found" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
