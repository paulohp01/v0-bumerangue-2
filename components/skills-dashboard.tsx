"use client"

import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface SkillCategory {
  title: string
  skills: {
    name: string
    proficiency: number
  }[]
}

interface SkillsDashboardProps {
  categories: SkillCategory[]
  className?: string
}

export function SkillsDashboard({ categories, className }: SkillsDashboardProps) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {categories.map((category) => (
        <Card key={category.title} className="overflow-hidden">
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-6 text-gradient-bumerangue">{category.title}</h2>
            <div className="space-y-6">
              {category.skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-bumerangue-purple to-bumerangue-lime"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
