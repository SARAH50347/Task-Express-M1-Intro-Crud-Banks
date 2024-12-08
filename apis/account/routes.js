const express = require("express");
const router = express.Router();

const {
  listaccount,
  createsAccount,
  updatAccount,
  deleteAccount,
} = require("./controllers");
router.get("/", listaccount);
router.post("/", createsAccount);
router.put("/:accountId", updatAccount);
router.delete("/:accountId", deleteAccount);

module.exports = router;
