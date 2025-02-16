require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRoutes = require("./src/routes/user.routes");

const app = express();

// variables de entorno
const PORT = process.env.PORT || 3000;
const IP_WEBSERVICE_URL = process.env.IP_WEBSERVICE_URL || "http://localhost";

// Middlewares
app.use(express.json());
app.use(cors());

// Rutas
app.use("/api/users", userRoutes);

// arranque del servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor corriendo en ${IP_WEBSERVICE_URL}:${PORT}`);
});
