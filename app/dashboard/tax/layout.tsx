import type React from "react"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function TaxDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <TaxNavigation />

        <Button
          variant="outline"
          className="flex items-center gap-2 border-bumerangue-purple/20 hover:bg-bumerangue-purple/10"
        >
          <FileDown className="h-4 w-4" />
          EXPORTAR DASHBOARD TRIBUTÁRIO EM PDF
        </Button>
      </div>

      <motion.div
        className="bg-card text-card-foreground rounded-lg border shadow-sm p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  )
}

function TaxNavigation() {
  "use client"

  const pathname = usePathname()

  const navItems = [
    { name: "Red Flags", path: "/dashboard/tax/red-flags" },
    { name: "Valor a Recuperar", path: "/dashboard/tax/recovery-value" },
    { name: "NCM", path: "/dashboard/tax/ncm" },
    { name: "Próximos Passos", path: "/dashboard/tax/next-steps" },
    { name: "Bumerangue", path: "/dashboard/tax/bumerangue" },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {navItems.map((item, index) => {
        const isActive = pathname === item.path
        return (
          <Link
            key={item.path}
            href={item.path}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive
                ? "bg-bumerangue-lime text-bumerangue-purple shadow-sm"
                : "bg-muted hover:bg-bumerangue-purple/10 text-foreground"
            }`}
          >
            <span className="font-bold mr-1">{index + 1}.</span> {item.name}
          </Link>
        )
      })}
    </div>
  )
}
