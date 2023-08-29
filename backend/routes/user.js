const userController = require("../controllers/userController");
const OrderController = require("../controllers/orderController")
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();
//GET ALL USERS
router.get("/", verifyToken, userController.getAllUsers);
router.post("/addorder",  OrderController.addOder);
router.post("/deleteorder",  OrderController.deleteOrder);
router.get("/getbook", userController.getBook);
router.post("/book", userController.getBooknow);
router.post("/refresh", userController.refreshuser);

//DELETE USER
router.delete("/:id", verifyTokenAndUserAuthorization, userController.deleteUser);

module.exports = router;