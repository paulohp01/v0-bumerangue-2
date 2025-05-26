import type React from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary">
            Bumerangue
          </Link>

          <div className="flex items-center gap-4">
            <DashboardTabs />
            <ThemeToggle />
          </div>
        </div>
      </header>

      <motion.main
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </div>
  )
}

function DashboardTabs() {
  "use client"

  const pathname = usePathname()
  const isTaxDashboard = pathname?.includes("/dashboard/tax")
  const isCommercialDashboard = pathname?.includes("/dashboard/commercial")
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  return (
    <Tabs defaultValue={isTaxDashboard ? "tax" : "commercial"} className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 bg-bumerangue-purple/10 dark:bg-bumerangue-purple/20">
        <Link href="/dashboard/tax/red-flags">
          <TabsTrigger
            value="tax"
            className={`text-base ${
              isTaxDashboard
                ? isDarkMode
                  ? "bg-bumerangue-lime text-bumerangue-purple"
                  : "bg-bumerangue-purple text-white"
                : ""
            }`}
          >
            Dashboard Tributário
          </TabsTrigger>
        </Link>
        <Link href="/dashboard/commercial">
          <TabsTrigger
            value="commercial"
            className={`text-base ${
              isCommercialDashboard
                ? isDarkMode
                  ? "bg-bumerangue-lime text-bumerangue-purple"
                  : "bg-bumerangue-purple text-white"
                : ""
            }`}
          >
            Dashboard Comercial
          </TabsTrigger>
        </Link>
      </TabsList>
    </Tabs>
  )
}
