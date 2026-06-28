export function buildPrompt(
  targetRole: string,
  resume: string
) {
  return `
You are an expert career mentor.

Analyze the following resume.

Target Role:
${targetRole}

Resume:
${resume}

Return ONLY JSON.

{
 "summary":"",
 "skills":[],
 "missingSkills":[],
 "readiness":0,
 "roadmap":[
   {
      "week":1,
      "title":"",
      "topics":[]
   }
 ],
 "resources":[],
 "projects":[]
}

`;
}