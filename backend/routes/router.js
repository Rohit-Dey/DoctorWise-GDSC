const express=require("express")
const router=new express.Router()
router.post('/register', async(req, res) => {
   
    res.status(201).json("storedata");
    console.log(req.body);
   
})
module.exports=router