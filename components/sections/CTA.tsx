"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openDiagnosisModal } from "./DiagnosisModal"

export function CTA() {
  const t = useTranslations("CTA")
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-20 md:py-32 relative bg-background" id="diagnosis">
      <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="glass py-16 px-8 md:py-24 md:px-24 rounded-[3rem] shadow-2xl border-white/50 relative overflow-hidden bg-white/40"
        >
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00071a_1px,_transparent_1px)] bg-[size:30px_30px]" />

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight max-w-4xl mx-auto">
            {t("title")}
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              onClick={() => openDiagnosisModal("diagnosis")}
              className="px-10 py-6 text-base sm:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              {t("button")}
            </Button>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <ShieldCheck className="h-5 w-5 text-secondary-container" />
              <span className="font-sans text-sm font-semibold">
                {t("subtitle")}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
