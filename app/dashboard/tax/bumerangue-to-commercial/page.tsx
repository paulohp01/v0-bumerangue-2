import type React from "react"
import BumerangueToCommercialClientPage from "./BumerangueToCommercialClientPage"

// This tells Next.js not to use the dashboard layout for this page
export const metadata = {
  title: "Transição",
}

// Override the default layout with an empty layout
export default function BumerangueToCommercialPage() {
  return <BumerangueToCommercialClientPage />
}

BumerangueToCommercialPage.getLayout = (page: React.ReactElement) => page
