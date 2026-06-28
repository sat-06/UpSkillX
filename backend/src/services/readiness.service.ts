export function calculateReadiness(skills: string[]) {

    const requiredSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "SQL",
        "Git"
    ];

    const matched = requiredSkills.filter(skill =>
        skills.includes(skill)
    );

    const score = Math.round(
        (matched.length / requiredSkills.length) * 100
    );

    const missingSkills = requiredSkills.filter(
        skill => !skills.includes(skill)
    );

    return {
        score,
        matchedSkills: matched,
        missingSkills
    };
}