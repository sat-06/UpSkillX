import { Router } from "express";

const router=Router();

router.get("/",(_,res)=>{

res.json({

status:"OK",

project:"UpSkillX",

ai:"Connected"

});

});

export default router;