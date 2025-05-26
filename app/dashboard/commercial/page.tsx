"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowDown,
  ArrowUp,
  BarChart3,
  Calendar,
  CreditCard,
  DollarSign,
  FileDown,
  Filter,
  Package,
  Percent,
  ShoppingBag,
  Tag,
} from "lucide-react"
import { DatePickerWithRange } from "@/components/date-range-picker"
import { useState } from "react"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useTheme } from "next-themes"

export default function CommercialDashboardPage() {
  const [dateRange, setDateRange] = useState({
    from: new Date(2023, 0, 1),
    to: new Date(),
  })
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  // Métricas principais
  const mainMetrics = [
    {
      title: "Valor Total",
      value: "R$ 1.245.678,90",
      icon: DollarSign,
      change: "+12.5%",
      trend: "up",
      color: "emerald",
    },
    {
      title: "Ticket Médio",
      value: "R$ 432,10",
      icon: CreditCard,
      change: "+5.2%",
      trend: "up",
      color: "emerald",
    },
    {
      title: "Total de Vendas",
      value: "2.883",
      icon: ShoppingBag,
      change: "+8.7%",
      trend: "up",
      color: "emerald",
    },
    {
      title: "Total de Itens",
      value: "8.649",
      icon: Package,
      change: "+10.3%",
      trend: "up",
      color: "emerald",
    },
    {
      title: "Descontos Concedidos",
      value: "R$ 87.654,32",
      icon: Tag,
      change: "-3.1%",
      trend: "down",
      color: "blue",
    },
    {
      title: "% Médio de Desconto",
      value: "7%",
      icon: Percent,
      change: "-1.5%",
      trend: "down",
      color: "blue",
    },
  ]

  // Dados para gráfico de vendas por mês
  const salesByMonth = [
    { name: "Jan", volume: 210, value: 90765.43 },
    { name: "Fev", volume: 240, value: 103987.65 },
    { name: "Mar", volume: 300, value: 129876.54 },
    { name: "Abr", volume: 278, value: 120345.67 },
    { name: "Mai", volume: 289, value: 124987.65 },
    { name: "Jun", volume: 320, value: 138765.43 },
    { name: "Jul", volume: 298, value: 128976.54 },
    { name: "Ago", volume: 310, value: 134567.89 },
    { name: "Set", volume: 350, value: 151234.56 },
    { name: "Out", volume: 330, value: 142987.65 },
    { name: "Nov", volume: 360, value: 155678.9 },
    { name: "Dez", volume: 380, value: 164567.89 },
  ]

  // Dados para gráfico de vendas por hora
  const salesByHour = [
    { hour: "08:00", value: 45 },
    { hour: "09:00", value: 78 },
    { hour: "10:00", value: 95 },
    { hour: "11:00", value: 120 },
    { hour: "12:00", value: 145 },
    { hour: "13:00", value: 135 },
    { hour: "14:00", value: 110 },
    { hour: "15:00", value: 125 },
    { hour: "16:00", value: 140 },
    { hour: "17:00", value: 130 },
    { hour: "18:00", value: 110 },
    { hour: "19:00", value: 85 },
    { hour: "20:00", value: 65 },
  ]

  // Dados para gráfico de vendas por dia da semana
  const salesByDay = [
    { day: "Segunda", value: 380 },
    { day: "Terça", value: 420 },
    { day: "Quarta", value: 450 },
    { day: "Quinta", value: 470 },
    { day: "Sexta", value: 520 },
    { day: "Sábado", value: 580 },
    { day: "Domingo", value: 320 },
  ]

  // Dados para ranking de vendedores
  const salesByVendor = [
    { name: "Carlos Silva", total: 245678.9, percentage: 19.7, status: "acima" },
    { name: "Ana Oliveira", total: 198765.43, percentage: 16.0, status: "acima" },
    { name: "Roberto Santos", total: 176543.21, percentage: 14.2, status: "na-media" },
    { name: "Juliana Costa", total: 154321.09, percentage: 12.4, status: "na-media" },
    { name: "Marcos Pereira", total: 143210.98, percentage: 11.5, status: "na-media" },
    { name: "Fernanda Lima", total: 132109.87, percentage: 10.6, status: "na-media" },
    { name: "Ricardo Souza", total: 98765.43, percentage: 7.9, status: "abaixo" },
    { name: "Patrícia Alves", total: 96543.21, percentage: 7.7, status: "abaixo" },
  ]

  // Dados para formas de pagamento
  const paymentMethods = [
    { name: "Cartão de Crédito", value: 65 },
    { name: "Pix", value: 20 },
    { name: "Boleto", value: 10 },
    { name: "Dinheiro", value: 5 },
  ]

  // Dados para produtos mais vendidos
  const topProducts = [
    { name: "Produto A", quantity: 1245 },
    { name: "Produto B", quantity: 987 },
    { name: "Produto C", quantity: 876 },
    { name: "Produto D", quantity: 765 },
    { name: "Produto E", quantity: 654 },
  ]

  // Dados para produtos frequentemente comprados juntos
  const frequentlyBoughtTogether = [
    { productA: "Produto A", productB: "Produto C", frequency: 78 },
    { productA: "Produto B", productB: "Produto D", frequency: 65 },
    { productA: "Produto A", productB: "Produto E", frequency: 54 },
    { productA: "Produto C", productB: "Produto D", frequency: 43 },
    { productA: "Produto B", productB: "Produto E", frequency: 32 },
  ]

  // Dados para fidelidade de clientes
  const customerLoyalty = [
    { name: "Recorrentes", value: 65 },
    { name: "Pontuais", value: 35 },
  ]

  const COLORS = isDarkMode
    ? ["#AAF000", "#9F70D0", "#4688FF", "#FC77AC", "#29B67C"]
    : ["#4527A0", "#9CDD00", "#3366CC", "#FF8042", "#29A67C"]

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">DASHBOARD COMERCIAL</h1>
        <p className="text-muted-foreground">
          O RX completo do seu negócio, extraído diretamente dos seus documentos tributários.
        </p>
        <p className="text-sm bumerangue-lime font-medium">O tesouro que os números escondem, nós revelamos.</p>
      </div>

      {/* Sistema de Filtros */}
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Filter className="h-5 w-5" />
              SISTEMA DE FILTROS
            </h2>

            <Button variant="outline" className="flex items-center gap-2">
              <FileDown className="h-4 w-4" />
              EXPORTAR DASHBOARD COMERCIAL EM PDF
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Período</label>
              <DatePickerWithRange date={dateRange} setDate={setDateRange} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Filtros Rápidos</label>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  Todos
                </Button>
                <Button variant="outline" size="sm">
                  Hoje
                </Button>
                <Button variant="outline" size="sm">
                  7 dias
                </Button>
                <Button variant="outline" size="sm">
                  15 dias
                </Button>
                <Button variant="outline" size="sm">
                  30 dias
                </Button>
                <Button variant="outline" size="sm">
                  90 dias
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Vendedor</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  {salesByVendor.map((vendor) => (
                    <SelectItem key={vendor.name} value={vendor.name.toLowerCase().replace(" ", "-")}>
                      {vendor.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Pagamento</label>
              <Select defaultValue="all">
                <SelectTrigger>
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  {paymentMethods.map((method) => (
                    <SelectItem key={method.name} value={method.name.toLowerCase().replace(" ", "-")}>
                      {method.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex gap-2 mt-4 justify-end">
            <Button variant="outline">LIMPAR</Button>
            <Button variant="lime" className="bg-bumerangue-lime">
              APLICAR FILTROS
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Métricas Principais */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <BarChart3 className="h-5 w-5" />
          MÉTRICAS PRINCIPAIS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainMetrics.map((metric) => (
            <Card
              key={metric.title}
              className={`overflow-hidden border-l-4 ${
                metric.color === "emerald"
                  ? "border-l-bumerangue-lime"
                  : metric.color === "blue"
                    ? "border-l-bumerangue-purple"
                    : "border-l-gray-500"
              }`}
            >
              <CardContent className="p-0">
                <div className="flex items-stretch">
                  <div
                    className={`flex items-center justify-center p-4 ${
                      metric.color === "emerald"
                        ? "bg-bumerangue-lime/20 text-bumerangue-lime"
                        : metric.color === "blue"
                          ? "bg-bumerangue-purple/20 text-bumerangue-purple"
                          : "bg-gray-50 text-gray-500 dark:bg-gray-800 dark:text-gray-300"
                    }`}
                  >
                    <metric.icon className="h-8 w-8" />
                  </div>
                  <div className="flex-1 p-4">
                    <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
                    <div className="flex items-end justify-between">
                      <p className="text-2xl font-bold mt-1">{metric.value}</p>
                      <div
                        className={`flex items-center text-sm font-medium ${
                          metric.trend === "up" ? "bumerangue-lime" : "bumerangue-purple"
                        }`}
                      >
                        {metric.trend === "up" ? (
                          <ArrowUp className="h-4 w-4 mr-1" />
                        ) : (
                          <ArrowDown className="h-4 w-4 mr-1" />
                        )}
                        {metric.change}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Vendas por Mês
              </h3>

              <Tabs defaultValue="value">
                <TabsList>
                  <TabsTrigger value="volume">Volume de venda</TabsTrigger>
                  <TabsTrigger value="value">Montante em R$</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={salesByMonth}>
                  <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#3F2C65" : "#E8E5F2"} />
                  <XAxis dataKey="name" tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                  <YAxis tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: isDarkMode ? "#27193F" : "#FFFFFF",
                      borderColor: isDarkMode ? "#493366" : "#E8E5F2",
                      color: isDarkMode ? "#FAFAFA" : "#39216C",
                    }}
                    formatter={(value, name) => [
                      name === "value" ? `R$ ${value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}` : value,
                      name === "value" ? "Valor" : "Volume",
                    ]}
                  />
                  <Legend
                    formatter={(value) => <span style={{ color: isDarkMode ? "#CBBFDD" : "#39216C" }}>{value}</span>}
                  />
                  <Bar
                    dataKey="value"
                    name="Valor (R$)"
                    fill={isDarkMode ? "#AAF000" : "#9CDD00"}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Análise de Tendências de Vendas */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">ANÁLISE DE TENDÊNCIAS DE VENDAS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Vendas por Hora</h3>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesByHour}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#3F2C65" : "#E8E5F2"} />
                    <XAxis dataKey="hour" tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                    <YAxis tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? "#27193F" : "#FFFFFF",
                        borderColor: isDarkMode ? "#493366" : "#E8E5F2",
                        color: isDarkMode ? "#FAFAFA" : "#39216C",
                      }}
                    />
                    <Bar
                      dataKey="value"
                      name="Vendas"
                      fill={isDarkMode ? "#AAF000" : "#9CDD00"}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-medium">Pico de Vendas: 12:00h</p>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 bg-muted rounded">
                    <p className="text-sm text-muted-foreground">Manhã</p>
                    <p className="font-medium">35%</p>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <p className="text-sm text-muted-foreground">Tarde</p>
                    <p className="font-medium">45%</p>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <p className="text-sm text-muted-foreground">Noite</p>
                    <p className="font-medium">20%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Vendas por Dia da Semana</h3>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesByDay}>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "#3F2C65" : "#E8E5F2"} />
                    <XAxis dataKey="day" tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                    <YAxis tick={{ fill: isDarkMode ? "#CBBFDD" : "#39216C" }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? "#27193F" : "#FFFFFF",
                        borderColor: isDarkMode ? "#493366" : "#E8E5F2",
                        color: isDarkMode ? "#FAFAFA" : "#39216C",
                      }}
                    />
                    <Bar
                      dataKey="value"
                      name="Vendas"
                      fill={isDarkMode ? "#AAF000" : "#9CDD00"}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 space-y-2">
                <p className="font-medium">Dia mais Movimentado: Sábado</p>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="p-2 bg-muted rounded">
                    <p className="text-sm text-muted-foreground">Dias Úteis</p>
                    <p className="font-medium">68%</p>
                  </div>
                  <div className="p-2 bg-muted rounded">
                    <p className="text-sm text-muted-foreground">Final de Semana</p>
                    <p className="font-medium">32%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Ranking de Vendedores */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">RANKING DE VENDEDORES</h2>

        <Card>
          <CardContent className="p-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vendedor</TableHead>
                  <TableHead className="text-right">Total Vendas</TableHead>
                  <TableHead className="text-right">% do Total</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesByVendor.map((vendor) => (
                  <TableRow key={vendor.name}>
                    <TableCell className="font-medium">{vendor.name}</TableCell>
                    <TableCell className="text-right">
                      R$ {vendor.total.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                    </TableCell>
                    <TableCell className="text-right">{vendor.percentage.toFixed(1)}%</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          vendor.status === "acima"
                            ? "bg-bumerangue-lime/20 text-bumerangue-lime dark:bg-bumerangue-lime/30 dark:text-bumerangue-lime"
                            : vendor.status === "na-media"
                              ? "bg-bumerangue-purple/20 text-bumerangue-purple dark:bg-bumerangue-purple/30 dark:text-bumerangue-purple"
                              : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                        }`}
                      >
                        {vendor.status === "acima"
                          ? "Acima da média"
                          : vendor.status === "na-media"
                            ? "Na média"
                            : "Abaixo da média"}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Análise de Comportamento de Compra */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">ANÁLISE DE COMPORTAMENTO DE COMPRA</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Formas de Pagamento</h3>

              <div className="h-[300px] w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={paymentMethods}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {paymentMethods.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? "#27193F" : "#FFFFFF",
                        borderColor: isDarkMode ? "#493366" : "#E8E5F2",
                        color: isDarkMode ? "#FAFAFA" : "#39216C",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Produtos Mais Vendidos</h3>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-right">Quantidade</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topProducts.map((product) => (
                    <TableRow key={product.name}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell className="text-right">{product.quantity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Produtos Frequentemente Comprados Juntos</h3>

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto A</TableHead>
                    <TableHead>Produto B</TableHead>
                    <TableHead className="text-right">Frequência</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {frequentlyBoughtTogether.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.productA}</TableCell>
                      <TableCell>{item.productB}</TableCell>
                      <TableCell className="text-right">{item.frequency}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-medium mb-4">Fidelidade de Clientes</h3>

              <div className="h-[250px] w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={customerLoyalty}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => (
                        <text
                          x={percent < 0.5 ? 180 : 220}
                          y={120}
                          fill={isDarkMode ? "#FFFFFF" : "#000000"}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          style={{
                            fontWeight: "bold",
                            fontSize: "12px",
                            textShadow: isDarkMode ? "0px 0px 3px rgba(0,0,0,0.8)" : "none",
                          }}
                        >
                          {`${name} ${(percent * 100).toFixed(0)}%`}
                        </text>
                      )}
                    >
                      {customerLoyalty.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDarkMode ? "#27193F" : "#FFFFFF",
                        borderColor: isDarkMode ? "#493366" : "#E8E5F2",
                        color: isDarkMode ? "#FAFAFA" : "#39216C",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="text-sm text-foreground font-medium">
                  <span className="inline-block w-3 h-3 mr-1" style={{ backgroundColor: COLORS[0] }}></span>
                  <strong>Clientes recorrentes:</strong> Realizaram mais de uma compra no período analisado.
                </p>
                <p className="text-sm text-foreground font-medium mt-1">
                  <span className="inline-block w-3 h-3 mr-1" style={{ backgroundColor: COLORS[1] }}></span>
                  <strong>Clientes pontuais:</strong> Realizaram apenas uma compra no período analisado.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
