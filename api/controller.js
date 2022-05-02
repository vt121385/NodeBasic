const express = require("express");
const router = express.Router();
router.get('/sampleApiFunction', async (req, res) => {
    console.log(req.query)
   if(req.query.message){
        return res.status(200).send({
            status: "success",
            message: req.query.message,
          });
    }else{
        return res.send({
            status: "Error",
            message: "Something going wrong",
          });
    }
});

module.exports = router;