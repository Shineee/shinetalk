var express = require("express")
var router = express.Router()

router.post("/dvc_info", function (req, res, next) {
  res.json({ status: "200", token: "80f6786A" })
})
router.post("/dvc_info_close", function (req, res, next) {
    res.json({ status: "201", token: "80f6786A" })
  })
module.exports = router
