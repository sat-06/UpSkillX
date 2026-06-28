import ai from "../config/gemini";

export async function generateAIRoadmap(
    role: string,
    skills: string[]
) {

    const prompt = `

You are an expert career mentor.

Target Role:

${role}

Current Skills:

${skills.join(", ")}

Generate:

1. Skill Gap

2. Weekly Roadmap

3. Resources

4. Projects

5. Internship Preparation

Return only clean markdown.

`;

    const response = await ai.models.generateContent({

        model: "gemini-2.5-flash",

        contents: prompt

    });

    return response.text;

}