import type React from "react"
import TransitionLayout from "@/app/transition-layout"

export default function BumerangueToCommercialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <TransitionLayout>{children}</TransitionLayout>
}
