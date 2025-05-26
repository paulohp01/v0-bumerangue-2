"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"

export default function BumerangueToCommercialClientPage() {
  const [countdown, setCountdown] = useState(15)
  const [fadeOut, setFadeOut] = useState(false)
  const router = useRouter()
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  useEffect(() => {
    if (countdown <= 0) {
      setFadeOut(true)
      setTimeout(() => {
        router.push("/dashboard/commercial")
      }, 1000)
      return
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [countdown, router])

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${isDarkMode ? "bg-[#211538]" : "bg-white"}`}
    >
      <div
        className={`max-w-4xl mx-auto text-center space-y-8 transition-opacity duration-1000 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <h1
          className={`text-4xl md:text-5xl font-bold tracking-tight ${
            isDarkMode ? "text-white" : "text-bumerangue-purple"
          }`}
        >
          Você sempre achou que ninguém conhecia seu negócio tão bem quanto você mesmo.
        </h1>

        <h2
          className={`text-3xl md:text-4xl font-medium ${isDarkMode ? "text-[#CBBFDD]" : "text-bumerangue-purple/80"}`}
        >
          Em{" "}
          <span className={`font-bold ${isDarkMode ? "text-bumerangue-lime" : "text-bumerangue-lime"}`}>
            {countdown}
          </span>{" "}
          segundos, descobrirá que estava errado - e nunca ficará tão feliz por isso.
        </h2>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
          <div
            className={`${
              isDarkMode ? "bg-bumerangue-lime" : "bg-bumerangue-purple"
            } h-full transition-all duration-1000 ease-linear`}
            style={{ width: `${(countdown / 15) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  )
}
