import { Router } from "express";

import upload from "../config/multer";

import { extractPDFText } from "../services/pdf.service";

const router=Router();

router.post(

    "/",

    upload.single("resume"),

    async(req,res)=>{

        if(!req.file){

            return res.status(400).json({

                message:"Resume missing"

            });

        }

        const text=await extractPDFText(req.file.path);

        res.json({

            extractedText:text

        });

    }

);

export default router;