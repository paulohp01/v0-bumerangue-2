"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, BarChart, LineChart } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { useTheme } from "next-themes"

export default function RecoveryValuePage() {
  const [value, setValue] = useState(0)
  const targetValue = 1258743.92
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => {
        if (prev < targetValue) {
          return Math.min(prev + targetValue / 50, targetValue)
        }
        clearInterval(interval)
        return targetValue
      })
    }, 30)

    return () => clearInterval(interval)
  }, [])

  const barData = [
    { name: "PIS/COFINS", valor: 587432.45, dificuldade: "Média" },
    { name: "ICMS", valor: 423987.12, dificuldade: "Alta" },
    { name: "IPI", valor: 156324.35, dificuldade: "Baixa" },
    { name: "IRPJ/CSLL", valor: 91000.0, dificuldade: "Alta" },
  ]

  const lineData = [
    { ano: "2020", valor: 0 },
    { ano: "2021", valor: 0 },
    { ano: "2022", valor: 0 },
    { ano: "2023", valor: 423987.12 },
    { ano: "2024", valor: 834756.8 },
    { ano: "2025", valor: 1258743.92 },
  ]

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">VALOR A RECUPERAR</h1>
        <p className="text-muted-foreground">
          Com base na análise dos seus documentos fiscais, identificamos o seguinte potencial de recuperação.
        </p>
      </div>

      <Card className="bg-bumerangue-lime/20 border-bumerangue-lime/30 dark:bg-bumerangue-lime/10 dark:border-bumerangue-lime/20">
        <CardContent className="p-6 text-center">
          <h2 className="text-lg font-medium bumerangue-purple mb-2">Valor Total a Recuperar</h2>
          <p className="text-5xl font-bold bumerangue-purple">
            R$ {value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </CardContent>
      </Card>

      <Tabs defaultValue="bar">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="bar" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            Gráfico de barras
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            Timeline
          </TabsTrigger>
        </TabsList>

        <TabsContent value="bar" className="pt-4">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#3F2C65" : "#E8E5F2"} />
                <XAxis dataKey="name" tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                <YAxis tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? "#27193F" : "#FFFFFF",
                    borderColor: isDarkMode ? "#493366" : "#E8E5F2",
                    color: isDarkMode ? "#FAFAFA" : "#39216C",
                  }}
                  formatter={(value) => [`R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`, "Valor"]}
                />
                <Legend
                  formatter={(value) => <span style={{ color: isDarkMode ? "#CBBFDD" : "#39216C" }}>{value}</span>}
                />
                <Bar
                  dataKey="valor"
                  name="Valor a Recuperar"
                  fill={isDarkMode ? "#AAF000" : "#9CDD00"}
                  radius={[4, 4, 0, 0]}
                />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {barData.map((item) => (
              <Card
                key={item.name}
                className={
                  item.dificuldade === "Alta"
                    ? "border-red-200 bg-red-50 dark:border-red-900/50 dark:bg-red-900/10"
                    : item.dificuldade === "Média"
                      ? "border-yellow-200 bg-yellow-50 dark:border-yellow-900/50 dark:bg-yellow-900/10"
                      : "border-green-200 bg-green-50 dark:border-green-900/50 dark:bg-green-900/10"
                }
              >
                <CardContent className="p-4">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-lg font-bold">
                    R$ {item.valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                  <p
                    className={
                      item.dificuldade === "Alta"
                        ? "text-red-700 text-sm dark:text-red-400"
                        : item.dificuldade === "Média"
                          ? "text-yellow-700 text-sm dark:text-yellow-400"
                          : "text-green-700 text-sm dark:text-green-400"
                    }
                  >
                    Dificuldade: {item.dificuldade}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="timeline" className="pt-4">
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsLineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#3F2C65" : "#E8E5F2"} />
                <XAxis dataKey="ano" tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                <YAxis tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDarkMode ? "#27193F" : "#FFFFFF",
                    borderColor: isDarkMode ? "#493366" : "#E8E5F2",
                    color: isDarkMode ? "#FAFAFA" : "#39216C",
                  }}
                  formatter={(value) => [`R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}`, "Valor"]}
                />
                <Legend
                  formatter={(value) => <span style={{ color: isDarkMode ? "#CBBFDD" : "#39216C" }}>{value}</span>}
                />
                <Line
                  type="monotone"
                  dataKey="valor"
                  name="Valor Recuperado"
                  stroke={isDarkMode ? "#AAF000" : "#9CDD00"}
                  strokeWidth={2}
                  dot={{ r: 6, fill: isDarkMode ? "#AAF000" : "#9CDD00", stroke: isDarkMode ? "#AAF000" : "#9CDD00" }}
                  activeDot={{
                    r: 8,
                    fill: isDarkMode ? "#AAF000" : "#9CDD00",
                    stroke: isDarkMode ? "#27193F" : "#FFFFFF",
                  }}
                />
              </RechartsLineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 p-4 border rounded-lg bg-muted">
            <h3 className="font-medium mb-2">Projeção de Recuperação</h3>
            <p className="text-foreground">
              A timeline acima mostra a projeção de recuperação fiscal ao longo do tempo. Os valores de 2023 representam
              recuperações já realizadas, enquanto 2024 e 2025 são projeções baseadas nos processos em andamento.
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between">
        <Link href="/dashboard/tax/red-flags">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </Button>
        </Link>

        <Link href="/dashboard/tax/ncm">
          <Button className="flex items-center gap-2 bg-bumerangue-purple hover:bg-bumerangue-purple/90 text-white">
            Próximo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
