const express = require("express");
const { getRealTimeData } = require("../controller/dashboard-controller");
const dashboardRouter = express.Router();

dashboardRouter.get("/dashboard", getRealTimeData);

module.exports = dashboardRouter;
