"use client"

import * as React from "react"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { openDiagnosisModal } from "./DiagnosisModal"

export function Hero() {
  const t = useTranslations("Hero")
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const slideUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Background radial gradient accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-surface-container-low)_0%,_transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column - Content */}
        <motion.div
          className="lg:col-span-6 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.span
            variants={slideUpVariants}
            className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary bg-secondary-container/10 px-4 py-1.5 rounded-full inline-block mb-6 border border-secondary/10"
          >
            {t("badge")}
          </motion.span>

          {/* Title */}
          <motion.h1
            variants={slideUpVariants}
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary leading-[1.1] mb-6"
          >
            {t("title1")}
            <span className="text-secondary-container">{t("title2")}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={slideUpVariants}
            className="font-sans text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed"
          >
            {t("subtitle")}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={() => openDiagnosisModal("diagnosis")}
              className="group flex items-center justify-center gap-2 hover:shadow-lg transition-shadow cursor-pointer"
            >
              {t("ctaPrimary")}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="cursor-pointer"
            >
              {t("ctaSecondary")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Visual Dashboard */}
        <motion.div
          className="lg:col-span-6 relative h-[400px] md:h-[550px] flex items-center justify-center w-full"
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
        >
          {/* Parallax / Floating Wrapper */}
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            animate={
              shouldReduceMotion
                ? {}
                : {
                    y: [0, -12, 0],
                  }
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Soft decorative shadow element */}
            <div className="absolute inset-0 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Isometric Glass Dashboard Container */}
            <div className="relative z-10 glass p-4 rounded-3xl shadow-2xl scale-100 sm:scale-110 md:scale-115 border border-white/40 overflow-hidden w-full max-w-[450px] aspect-[4/3] flex items-center justify-center bg-white/40">
              <Image
                className="rounded-2xl object-cover w-full h-full"
                src="/images/dashboard.jpg"
                alt={t("dashboardAlt")}
                width={450}
                height={337}
                priority
              />
            </div>

            {/* Extra micro-interactions floating elements */}
            {!shouldReduceMotion && (
              <>
                {/* Floating dot 1 */}
                <motion.div
                  className="absolute top-12 left-12 w-6 h-6 rounded-full bg-secondary-container/20 blur-sm z-20 pointer-events-none"
                  animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* Floating dot 2 */}
                <motion.div
                  className="absolute bottom-16 right-8 w-10 h-10 rounded-full bg-secondary/10 blur-md z-20 pointer-events-none"
                  animate={{ y: [0, -10, 0], x: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
