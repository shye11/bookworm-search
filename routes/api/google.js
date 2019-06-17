const router = require("express").Router();
const googleController = require("../../controllers/googleControllers");

// Matches with "/api/google"
router
  .route("/:search")
  .get(googleController.findAll);

module.exports = router;