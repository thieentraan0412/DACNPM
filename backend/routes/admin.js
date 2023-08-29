const authController = require("../controllers/authControllers");
const adminController = require("../controllers/adminController");
const router = require("express").Router();
const { verifyToken, verifyTokenAndUserAuthorization, verifyTokenAndAdmin } = require("../controllers/verifyToken");

//REGISTER
router.post("/addbookadmin", adminController.addbookdata);
router.post("/changeprice",adminController.changeprice);
router.post("/changediscount", adminController.changediscount);
router.post("/getuser", adminController.getuser);
router.delete("/deleteuser", adminController.deleteuser);
router.delete("/deletebook", adminController.deletebook);


module.exports = router;