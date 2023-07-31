const router = require("express").Router();
const {Answer,getAnswer}=require("./anwer.controller");

router.post("/",Answer);
router.get("/:question_id", getAnswer);

module.exports = router;
