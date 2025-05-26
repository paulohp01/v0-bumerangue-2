"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "next-themes"

export default function BumeranguePage() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">BUMERANGUE</h1>
        <p className="text-muted-foreground">
          Conheça nosso modelo de pagamento e como podemos ajudar na recuperação fiscal da sua empresa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-medium">Modelo de Pagamento</h3>
            <p className="text-foreground">
              Na Bumerangue, trabalhamos com um modelo de pagamento baseado em sucesso. Isso significa que você só paga
              se recuperarmos valores para sua empresa.
            </p>

            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 bumerangue-lime flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Sem custos iniciais</h4>
                  <p className="text-sm text-muted-foreground">Não há taxas de adesão ou mensalidades</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 bumerangue-lime flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Pagamento apenas sobre o sucesso</h4>
                  <p className="text-sm text-muted-foreground">Você só paga quando recuperamos valores</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 bumerangue-lime flex-shrink-0" />
                <div>
                  <h4 className="font-medium">Transparência total</h4>
                  <p className="text-sm text-muted-foreground">Você acompanha todo o processo</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card
          className={`${isDarkMode ? "bg-bumerangue-lime/10 border-bumerangue-lime/20" : "bg-bumerangue-lime/20 border-bumerangue-lime/30"}`}
        >
          <CardContent className="p-6 flex flex-col h-full justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-medium bumerangue-purple">Valor Identificado</h3>
              <p className="text-4xl font-bold bumerangue-purple">R$ 1.258.743,92</p>
              <p className="bumerangue-purple">
                Este é o valor que identificamos como potencial de recuperação para sua empresa.
              </p>
            </div>

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full py-6 text-lg mt-6 bg-bumerangue-purple hover:bg-bumerangue-purple/90 text-white">
                  QUERO RECUPERAR AGORA
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Detalhes do Modelo de Pagamento</DialogTitle>
                  <DialogDescription>
                    Entenda como funciona nosso modelo de pagamento baseado em sucesso.
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6 py-4">
                  <div className="space-y-3">
                    <h4 className="font-medium">Valor destinado à Bumerangue</h4>
                    <div
                      className={`p-4 ${isDarkMode ? "bg-bumerangue-lime/10" : "bg-bumerangue-lime/20"} rounded-lg text-center`}
                    >
                      <p className="text-sm text-muted-foreground">Total a ser pago à Bumerangue</p>
                      <p className="text-3xl font-bold bumerangue-purple">R$ 377.623,18</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-medium">Distribuição Percentual</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-muted rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">Bumerangue</p>
                        <p className="text-2xl font-bold bumerangue-purple">30%</p>
                      </div>
                      <div className="p-4 bg-muted rounded-lg text-center">
                        <p className="text-sm text-muted-foreground">Contador</p>
                        <p className="text-2xl font-bold bumerangue-purple">10%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between items-center">
        <Link href="/dashboard/tax/next-steps">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </Button>
        </Link>

        <Link href="/dashboard/tax/bumerangue-to-commercial" prefetch={false}>
          <Button className="flex items-center gap-2 py-6 px-8 text-lg bg-bumerangue-purple hover:bg-bumerangue-purple/90 text-white">
            ACESSAR DASHBOARD COMERCIAL
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
