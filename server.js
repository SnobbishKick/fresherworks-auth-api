const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");


const app = express();

//Middleware
app.use(express.json());

app.use("/api/auth", authRoutes);

//Test route
app.get("/", (req,res) => {
   res.send("API is running");
});

//Port
const PORT = 5000;

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