const requiredSkills=[

    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "SQL",
    "Git",
    "Docker"

];

export function skillGap(currentSkills:string[]){

    return requiredSkills.filter(

        skill=>!currentSkills.includes(skill)

    );

}