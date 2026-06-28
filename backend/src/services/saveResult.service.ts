import prisma from "../lib/prisma";

export async function saveAssessment(

    userId:string,

    data:any

){

    return prisma.assessment.create({

        data:{

            userId,

            targetRole:data.role,

            overallScore:data.readiness,

            aiFeedback:data.summary,

            skillGaps:data.missingSkills

        }

    });

}