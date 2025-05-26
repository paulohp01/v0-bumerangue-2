"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

export default function NcmPage() {
  const [showWarning, setShowWarning] = useState(true)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const ncmData = [
    {
      id: 1,
      produto: "Máquina de Lavar Industrial",
      ncmAtual: "8450.20.90",
      ncmCorreto: "8450.20.10",
      impacto: 12543.87,
      impactoMontante: 15052.64,
    },
    {
      id: 2,
      produto: "Peças de Reposição",
      ncmAtual: "8450.90.90",
      ncmCorreto: "8450.90.10",
      impacto: 8765.32,
      impactoMontante: 10518.38,
    },
    {
      id: 3,
      produto: "Sistema de Filtragem",
      ncmAtual: "8421.29.90",
      ncmCorreto: "8421.29.30",
      impacto: 15432.98,
      impactoMontante: 18519.58,
    },
    {
      id: 4,
      produto: "Painel de Controle",
      ncmAtual: "8537.10.90",
      ncmCorreto: "8537.10.20",
      impacto: 9876.54,
      impactoMontante: 11851.85,
    },
    {
      id: 5,
      produto: "Bomba Hidráulica",
      ncmAtual: "8413.70.90",
      ncmCorreto: "8413.70.10",
      impacto: 11234.56,
      impactoMontante: 13481.47,
    },
  ]

  const totalImpacto = ncmData.reduce((sum, item) => sum + item.impacto, 0)

  return (
    <div className="space-y-6">
      <Dialog open={showWarning} onOpenChange={setShowWarning}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Aviso Importante</DialogTitle>
            <DialogDescription>
              Alterações de NCM podem acender alertas se feitas de uma vez. Recomendamos uma abordagem gradual para
              minimizar riscos.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setShowWarning(false)}>OK</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">NCM</h1>
        <p className="text-muted-foreground">
          Identificamos classificações incorretas de NCM que impactam diretamente na tributação dos seus produtos.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-4">Impacto Financeiro da Correção de NCM</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Valor Total a Recuperar:</span>
                <span className="text-xl font-bold bumerangue-lime">
                  R$ {totalImpacto.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Produtos com NCM incorreto:</span>
                <span className="text-lg font-medium">{ncmData.length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Impacto médio por produto:</span>
                <span className="text-lg font-medium">
                  R$ {(totalImpacto / ncmData.length).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="font-medium mb-4">Comparativo de Métodos de Recuperação</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Via correção de NCM:</span>
                <Badge
                  className={`${isDarkMode ? "bg-bumerangue-lime/30 text-bumerangue-lime hover:bg-bumerangue-lime/30" : "bg-bumerangue-lime/20 text-bumerangue-lime hover:bg-bumerangue-lime/20"}`}
                >
                  R$ {totalImpacto.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Via crédito presumido:</span>
                <Badge className="bg-muted text-foreground hover:bg-muted">
                  R$ {(totalImpacto * 0.7).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Via compensação:</span>
                <Badge className="bg-muted text-foreground hover:bg-muted">
                  R$ {(totalImpacto * 0.6).toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>NCM Atual</TableHead>
            <TableHead>NCM Correto</TableHead>
            <TableHead className="text-right">Impacto Financeiro por produto</TableHead>
            <TableHead className="text-right">Impacto financeiro no montante</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ncmData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.produto}</TableCell>
              <TableCell className="font-mono text-red-600 dark:text-red-400">{item.ncmAtual}</TableCell>
              <TableCell className="font-mono bumerangue-lime">{item.ncmCorreto}</TableCell>
              <TableCell className="text-right">
                R$ {item.impacto.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </TableCell>
              <TableCell className="text-right">
                R$ {item.impactoMontante.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-between">
        <Link href="/dashboard/tax/recovery-value">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </Button>
        </Link>

        <Link href="/dashboard/tax/next-steps">
          <Button className="flex items-center gap-2 bg-bumerangue-purple hover:bg-bumerangue-purple/90 text-white">
            Próximo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
