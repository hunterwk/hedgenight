const router = require("express").Router();
const { hasValidToken } = require("../../middleware/auth.middleware");
const authController = require("../../controllers/auth.controller");
const path = require("path");

// routing
router.post("/api/auth/login", authController.login);
router.post("/api/auth/signup", authController.signup);

// example of unprotected route. (guest users can access)
router.get("/api/unprotected", (req, res) => res.json({ message: "public data" }));

// example of a protected route. Request must have a valid token.
router.get("/api/protected", hasValidToken, (req, res) => {
  // the hasValidToken middleware decodes the payload and adds a "user" property to the request.
  console.log(req.user);
  res.json({ message: "protected data" });
});

router.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client/build/index.html"))
);

module.exports = router;