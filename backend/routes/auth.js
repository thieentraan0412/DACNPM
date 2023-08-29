const authController = require("../controllers/authControllers");

const router = require("express").Router();
const { verifyToken } = require("../controllers/verifyToken");

//REGISTER
router.post("/register", authController.registerUser);

//LOG IN
router.post("/login", authController.loginUser);
//LOG OUT
router.post("/logout", authController.userLogout);



module.exports = router;