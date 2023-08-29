const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const adminRoute = require("./routes/admin");
dotenv.config();
const port = 8080
async function connect()
{
    try {
        await mongoose.connect("mongodb://localhost:27017/DACNPM",{
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
        console.log("connected in mongdb")
      } catch (error) {
        console.log("ko ket noi duoc");
      }
}
connect();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//ROUTES
app.use("/v1/auth", authRoute);
app.use("/v1/user", userRoute);
app.use("/v1/admin", adminRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})