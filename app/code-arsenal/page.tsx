import { SkillsDashboard } from "@/components/skills-dashboard"

export default function CodeArsenalPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", proficiency: 90 },
        { name: "TypeScript", proficiency: 80 },
        { name: "Solidity", proficiency: 70 },
        { name: "Go", proficiency: 60 },
        { name: "Rust", proficiency: 50 },
      ],
    },
    {
      title: "Frameworks/Libraries",
      skills: [
        { name: "React", proficiency: 95 },
        { name: "Next.js", proficiency: 85 },
        { name: "Node.js", proficiency: 75 },
        { name: "Express.js", proficiency: 65 },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", proficiency: 98 },
        { name: "Docker", proficiency: 88 },
        { name: "Kubernetes", proficiency: 78 },
      ],
    },
  ]

  return (
    <div className="container py-10 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gradient-bumerangue flex items-center justify-center gap-2">
          Code Arsenal
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-bumerangue-lime"
          >
            <path d="M14.5 17.5L3 6" />
            <path d="M13 19l9-9" />
            <path d="M16 16l3-3" />
            <path d="M8 8l3-3" />
            <path d="M9 5l-6 6" />
          </svg>
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A comprehensive overview of technical skills and proficiency levels across different categories.
        </p>
      </div>

      <SkillsDashboard categories={skillCategories} />
    </div>
  )
}
