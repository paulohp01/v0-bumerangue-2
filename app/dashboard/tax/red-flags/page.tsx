import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function RedFlagsPage() {
  const redFlags = [
    {
      id: 1,
      inconsistency: "Inconsistência entre CFOP e NCM",
      severity: "Alta",
      recommendation: "Revisar e corrigir classificações de CFOP e NCM em notas fiscais de entrada",
    },
    {
      id: 2,
      inconsistency: "Créditos de PIS/COFINS não aproveitados",
      severity: "Alta",
      recommendation: "Identificar e recuperar créditos de PIS/COFINS em operações de exportação",
    },
    {
      id: 3,
      inconsistency: "Divergência em alíquotas de ICMS",
      severity: "Média",
      recommendation: "Ajustar alíquotas de ICMS conforme legislação vigente",
    },
    {
      id: 4,
      inconsistency: "Créditos presumidos não aproveitados",
      severity: "Média",
      recommendation: "Implementar aproveitamento de créditos presumidos de ICMS",
    },
    {
      id: 5,
      inconsistency: "Classificação incorreta de despesas",
      severity: "Baixa",
      recommendation: "Reclassificar despesas dedutíveis para IRPJ/CSLL",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">RED FLAGS CONTÁBEIS</h1>
        <p className="text-muted-foreground">
          Identificamos as seguintes inconsistências contábeis que podem representar oportunidades de recuperação
          fiscal.
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Inconsistências Tributárias</TableHead>
            <TableHead className="w-[200px]">Gravidade da inconsistência</TableHead>
            <TableHead>Recomendação</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {redFlags.map((flag) => (
            <TableRow key={flag.id}>
              <TableCell className="font-medium">{flag.inconsistency}</TableCell>
              <TableCell>
                <Badge
                  className={
                    flag.severity === "Alta"
                      ? "bg-red-100 text-red-800 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/30"
                      : flag.severity === "Média"
                        ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400 dark:hover:bg-yellow-900/30"
                        : "bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/30"
                  }
                >
                  {flag.severity}
                </Badge>
              </TableCell>
              <TableCell>{flag.recommendation}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex justify-end">
        <Link href="/dashboard/tax/recovery-value">
          <Button className="flex items-center gap-2 bg-bumerangue-purple hover:bg-bumerangue-purple/90 text-white">
            Próximo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
