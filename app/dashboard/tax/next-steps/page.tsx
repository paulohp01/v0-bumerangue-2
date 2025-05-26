"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ArrowLeft, ArrowRight, Check, Copy, FileDown } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"

export default function NextStepsPage() {
  const [checklist, setChecklist] = useState({
    "contrato-social": false,
    procuracao: false,
    ecf: false,
    ecd: false,
    "notas-fiscais": false,
    dctf: false,
    "per-dcomp": false,
  })
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const handleCheckboxChange = (id: string) => {
    setChecklist((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const copyChecklist = () => {
    const text = Object.entries(checklist)
      .map(([key, value]) => `[${value ? "x" : " "}] ${key.replace(/-/g, " ").toUpperCase()}`)
      .join("\n")

    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">PRÓXIMOS PASSOS</h1>
        <p className="text-muted-foreground">
          Acompanhe o progresso do seu processo de recuperação fiscal e os próximos passos necessários.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-bumerangue-lime via-bumerangue-purple to-border"></div>

        <div className="space-y-12 relative">
          <TimelineItem
            title="Enviar dados"
            description="Envio dos dados fiscais para análise inicial"
            status="completed"
          />

          <TimelineItem
            title="Scanner bumerangue"
            description="Análise automatizada dos documentos fiscais"
            status="completed"
          />

          <TimelineItem
            title="Revisão por advogados bumerangue"
            description="Análise jurídica das oportunidades identificadas"
            status="completed"
          />

          <TimelineItem
            title="Apresentação de valor para recuperação"
            description="Demonstração do potencial de recuperação fiscal"
            status="completed"
          />

          <TimelineItem
            title="Assinatura de contrato"
            description="Formalização da parceria para recuperação fiscal"
            status="pending"
          />

          <TimelineItem
            title="Encaminhamento de documentos"
            description="Envio dos documentos necessários para o processo"
            status="pending"
            expanded={true}
          >
            <Card className="mt-6 border-dashed bg-muted/30">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-lg">Checklist de Documentos</h4>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 border-bumerangue-purple/20 hover:bg-bumerangue-purple/10"
                      onClick={copyChecklist}
                    >
                      <Copy className="h-4 w-4" />
                      Copiar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 border-bumerangue-purple/20 hover:bg-bumerangue-purple/10"
                    >
                      <FileDown className="h-4 w-4" />
                      Exportar
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ChecklistItem
                    id="contrato-social"
                    label="Contrato Social"
                    checked={checklist["contrato-social"]}
                    onChange={() => handleCheckboxChange("contrato-social")}
                  />
                  <ChecklistItem
                    id="procuracao"
                    label="Procuração"
                    checked={checklist["procuracao"]}
                    onChange={() => handleCheckboxChange("procuracao")}
                  />
                  <ChecklistItem
                    id="ecf"
                    label="ECF (últimos 5 anos)"
                    checked={checklist["ecf"]}
                    onChange={() => handleCheckboxChange("ecf")}
                  />
                  <ChecklistItem
                    id="ecd"
                    label="ECD (últimos 5 anos)"
                    checked={checklist["ecd"]}
                    onChange={() => handleCheckboxChange("ecd")}
                  />
                  <ChecklistItem
                    id="notas-fiscais"
                    label="Notas Fiscais"
                    checked={checklist["notas-fiscais"]}
                    onChange={() => handleCheckboxChange("notas-fiscais")}
                  />
                  <ChecklistItem
                    id="dctf"
                    label="DCTF (últimos 5 anos)"
                    checked={checklist["dctf"]}
                    onChange={() => handleCheckboxChange("dctf")}
                  />
                  <ChecklistItem
                    id="per-dcomp"
                    label="PER/DCOMP (se houver)"
                    checked={checklist["per-dcomp"]}
                    onChange={() => handleCheckboxChange("per-dcomp")}
                  />
                </div>
              </CardContent>
            </Card>
          </TimelineItem>

          <TimelineItem
            title="Petição"
            description="Elaboração e protocolo da petição administrativa ou judicial"
            status="pending"
          />

          <TimelineItem
            title="Recursos (se necessário)"
            description="Acompanhamento e interposição de recursos"
            status="pending"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <Link href="/dashboard/tax/ncm">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </Button>
        </Link>

        <Link href="/dashboard/tax/bumerangue">
          <Button className="flex items-center gap-2 bg-bumerangue-purple hover:bg-bumerangue-purple/90 text-white">
            Próximo
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

interface TimelineItemProps {
  title: string
  description: string
  status: "completed" | "pending"
  expanded?: boolean
  children?: React.ReactNode
}

function TimelineItem({ title, description, status, expanded = false, children }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false)
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  useEffect(() => {
    // Delay to trigger animation after component mount
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      className="relative pl-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={`absolute left-0 top-0 flex items-center justify-center w-16 h-16 rounded-full border-4 ${
          status === "completed"
            ? "bg-bumerangue-lime/20 border-bumerangue-lime shadow-lg shadow-bumerangue-lime/20 dark:bg-bumerangue-lime/10 dark:border-bumerangue-lime dark:shadow-bumerangue-lime/10"
            : "bg-muted border-border"
        }`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {status === "completed" && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2,
              }}
            >
              <Check className="h-8 w-8 text-bumerangue-lime" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="relative">
        <motion.h3
          className={`text-xl font-medium ${status === "completed" ? "bumerangue-lime" : "text-foreground"}`}
          animate={{
            x: isVisible && status === "completed" ? [0, 5, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: "easeInOut",
          }}
        >
          {title}
          {status === "completed" && (
            <motion.span
              className="inline-block ml-2"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
            >
              ✓
            </motion.span>
          )}
        </motion.h3>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description}
        </motion.p>
        {children}
      </div>
    </motion.div>
  )
}

interface ChecklistItemProps {
  id: string
  label: string
  checked: boolean
  onChange: () => void
}

function ChecklistItem({ id, label, checked, onChange }: ChecklistItemProps) {
  return (
    <motion.div
      className="flex items-center space-x-2 p-2 rounded-md hover:bg-muted/50 transition-colors"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={onChange}
        className={checked ? "border-bumerangue-lime text-bumerangue-lime" : ""}
      />
      <Label
        htmlFor={id}
        className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
          checked ? "text-bumerangue-lime line-through" : ""
        }`}
      >
        {label}
      </Label>
    </motion.div>
  )
}
