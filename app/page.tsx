import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-3xl mx-auto text-center space-y-8">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>

        <h1 className="text-3xl md:text-4xl tracking-tight bumerangue-purple">
          Você está preparado para descobrir quanto dinheiro a{" "}
          <span className="bumerangue-lime font-bold">bumerangue</span> pode devolver para você?
        </h1>

        <div className="max-w-md mx-auto space-y-4">
          <div className="space-y-2">
            <Label htmlFor="cnpj" className="text-left block">
              Digite seu CNPJ para confirmar
            </Label>
            <Input id="cnpj" placeholder="XX.XXX.XXX/XXXX-XX" className="text-center text-lg py-6" />
          </div>

          <Link href="/dashboard/tax/red-flags">
            <Button className="w-full py-6 text-lg bg-bumerangue-lime text-bumerangue-purple hover:bg-bumerangue-lime/90">
              ANALISAR
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
