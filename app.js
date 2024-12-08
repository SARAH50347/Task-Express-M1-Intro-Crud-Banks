const express = require("express");
const app = express();
const port = "8000";

const AccountRoutes = require("./apis/account/routes");
const connectDb = require("./database");
app.use(express.json());
app.use("/apis/accounts", AccountRoutes);
connectDb();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
