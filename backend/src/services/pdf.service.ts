import fs from "fs";
const pdf = require("pdf-parse");

export async function extractPDFText(filePath:string){

    const buffer=fs.readFileSync(filePath);

    const data=await pdf(buffer);

    return data.text;

}