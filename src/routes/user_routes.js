const express = require("express");
const {
  getUsers, deleteUser, updateUser,
  updateRol, addRol, deleteRol,
  addPermission, deletePermission
} = require("../controllers/user_controller");
const { verifyTokenAndPermissions } = require("../middlewares/authMiddleware");

const router = express.Router();

// Definir rutas con protección por permisos
router.get("/users", verifyTokenAndPermissions("get_user"), getUsers);
router.delete("/users/:id", verifyTokenAndPermissions("delete_user"), deleteUser);
router.put("/users/:id", verifyTokenAndPermissions("update_user"), updateUser);
router.put("/users/:id/role", verifyTokenAndPermissions("update_rol"), updateRol);

router.post("/roles", verifyTokenAndPermissions("add_rol"), addRol);
router.delete("/roles/:rol", verifyTokenAndPermissions("delete_rol"), deleteRol);

router.post("/permissions", verifyTokenAndPermissions("add_permission"), addPermission);
router.delete("/permissions", verifyTokenAndPermissions("delete_permission"), deletePermission);

module.exports = router;
