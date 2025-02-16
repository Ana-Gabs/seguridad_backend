require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/user.routes");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuvhando en http://localhost:${PORT}`);
});
