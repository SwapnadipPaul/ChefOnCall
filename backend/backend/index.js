//import productRoutes from "./routes/productRoutes.js";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/product.js";
import { router as userRoutes } from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import products from "./data/products.js";
import cors from "cors";


dotenv.config(); 
connectDB();


const app = express();
app.use(express.json()); 
app.use(cors());


// ROUTES

// temp debug — put this ately before app.use("/api/users", userRoutes);
app.use("/api/users", (req, res, next) => {
  console.log(">>> in coming /api/users request:", req.method, req.path);
  next();
}, userRoutes);

app.get("/api/dump/products", (req, res) => {
  return res.json(products);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

//app.use('/api/users', userRoutes);


// get all products
app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// get single product
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Product not found" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

//post products
app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: "Invalid product data" });
  }
});

//updating products
app.put("/api/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: "Invalid product data" });
  }
});

//deleting products
app.delete("/api/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Invalid product ID" });
  }
});

// test route for load testing
app.get("/api/test/slow", async (req, res) => {
  console.log("Hit slow endpoint...");

  // Simulate heavy work (blocking the thread for 5s)
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(5000);

  res.json({ message: "Done after 5 seconds!" });
});



const PORT = process.env.PORT || 5001;

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`🚀 Server started on PORT: ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();


//app.use("/api/products", productRoutes);


// error middlewares
app.use(notFound);
app.use(errorHandler);

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});


// temp: print registered routes
function printRoutes() {
  const out = [];
  app._router.stack.forEach(mw => {
    if (mw.route) {
      // routes registered directly on app
      out.push(`${Object.keys(mw.route.methods).join(',').toUpperCase()} ${mw.route.path}`);
    } else if (mw.name === 'router' && mw.handle && mw.handle.stack) {
      mw.handle.stack.forEach(r => {
        if (r.route) {
          out.push(`${Object.keys(r.route.methods).join(',').toUpperCase()} ${r.route.path}`);
        }
      });
    }
  });
  console.log("Registered routes:\n" + out.join("\n"));
}



