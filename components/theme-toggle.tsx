"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evita problemas de hidratação
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-[62px] h-[28px] rounded-full bg-gray-200 dark:bg-gray-700 relative">
        <div className="w-6 h-6 rounded-full absolute left-1 top-1 bg-white"></div>
      </div>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className={`w-[62px] h-[28px] rounded-full relative transition-colors duration-300 ${
        theme === "dark" ? "bg-primary" : "bg-gray-200"
      }`}
      aria-label="Toggle theme"
    >
      <span
        className={`absolute inset-y-1 w-6 h-6 rounded-full transition-transform duration-300 flex items-center justify-center ${
          theme === "dark" ? "transform translate-x-[34px] bg-white" : "translate-x-1 bg-white"
        }`}
      >
        {theme === "dark" ? <Moon className="h-4 w-4 text-primary" /> : <Sun className="h-4 w-4 text-amber-500" />}
      </span>
    </button>
  )
}
