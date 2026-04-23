require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();

//Middleware
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

//Test route
app.get("/", (req,res) => {
   res.send("API is running");
});

//Port
const PORT = process.env.PORT || 5000;

//Start server AFTER DB connection
const startServer = async () => {
   try {
      await connectDB();
      app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
      });
   } catch (error) {
      console.error("Failed to start server:", error.message);
      process.exit(1);
   }
};

startServer();