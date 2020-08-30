const Router =  require("express");
const router = Router();
const registerRouter =  require("./account/register");
const clientRouter = require("./clients/clients");
const managementRouter = require("./clients/management");
const dashboardRouter = require("./dashboard/dashboard");

router.use("/profile", registerRouter);
router.use("/client", clientRouter);
router.use("/management", managementRouter);
router.use("/dashboard", dashboardRouter);

module.exports = router;