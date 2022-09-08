const { Router } = require("express");
const { get } = require("../controlers/gett");

const router = Router();

  router.get("/", get);
  
  (module.exports = router);

  