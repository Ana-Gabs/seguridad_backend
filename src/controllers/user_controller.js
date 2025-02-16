const jwt = require("jsonwebtoken");

// Usuarios en hardcoding (esto se reemplazaría con una base de datos en el futuro)
const users = [
  { id: 1, username: "Gabs", password: "V19149z00*" },
  { id: 2, username: "Ferb", password: "z25k003+" },
];

exports.login = (req, res) => {
  const { username, password } = req.body;

  // validar  que los campos no estén vacíos
  if (!username || !password) {
    return res.status(400).json({
      statusCode: 400,
      intDataMessage: [{ credentials: "Usuario y contraseña son requeridos" }],
    });
  }

  /*busca al usuario*/
  const user = users.find(u => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({
      statusCode: 401,
      intDataMessage: [{ credentials: "Credenciales incorrectas" }],
    });
  }

  // se crea un  token JWT, que exiprará 1 minuto despues
  const token = jwt.sign({ id: user.id, username: user.username }, "secreto", {
    expiresIn: "1m",
  });

  res.status(200).json({
    statusCode: 200,
    intDataMessage: [{ credentials: token }],
  });
};
