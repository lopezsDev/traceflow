"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import {
  Calendar,
  Search,
  Layers,
  TimerOff,
  Globe,
  EyeOff,
  ArrowRight,
  Rocket,
} from "lucide-react"
import { openDiagnosisModal } from "./DiagnosisModal"

export function Problems() {
  const t = useTranslations("Problems")
  const shouldReduceMotion = useReducedMotion()

  const items = [
    {
      key: "appointments",
      icon: Calendar,
    },
    {
      key: "leads",
      icon: Search,
    },
    {
      key: "information",
      icon: Layers,
    },
    {
      key: "manual",
      icon: TimerOff,
    },
    {
      key: "website",
      icon: Globe,
    },
    {
      key: "visibility",
      icon: EyeOff,
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  }

  return (
    <section
      className="py-20 md:py-32 bg-surface border-t border-b border-outline-variant/20"
      id="complexity-solved"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-xs font-semibold uppercase tracking-widest text-on-surface-variant border border-outline-variant px-4 py-1 rounded-full inline-block mb-6"
          >
            {t("badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight mb-6 leading-tight max-w-3xl"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-base text-on-surface-variant max-w-2xl"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {items.map((item) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.key}
                variants={cardVariants}
                className="bg-white border border-outline-variant/30 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Header indicators */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                      {t("labels.problem")}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-container">
                    {t("labels.solution")}
                  </span>
                </div>

                {/* Problem & Solution Flow */}
                <div className="flex flex-col sm:flex-row items-stretch gap-4">
                  {/* Problem details */}
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-primary mb-1">
                      {t(`items.${item.key}.problemTitle`)}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {t(`items.${item.key}.problemDesc`)}
                    </p>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex items-center justify-center py-2 sm:py-0 text-on-surface-variant/40">
                    <ArrowRight className="h-4 w-4 transform rotate-90 sm:rotate-0" />
                  </div>

                  {/* Solution details */}
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-secondary-container mb-1">
                      {t(`items.${item.key}.solutionTitle`)}
                    </h4>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      {t(`items.${item.key}.solutionDesc`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Quote Matching Banner */}
        <motion.div
          initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-surface-container-low border border-outline-variant/30 rounded-3xl p-6 sm:p-8 flex flex-col lg:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
              <Rocket className="h-6 w-6 text-secondary-container" />
            </div>
            <div>
              <p className="font-bold text-primary text-base sm:text-lg">
                {t("banner.title")}
              </p>
              <span className="block text-xs sm:text-sm font-normal text-on-surface-variant mt-1">
                {t("banner.subtitle")}
              </span>
            </div>
          </div>
          <button
            onClick={() => openDiagnosisModal("quote")}
            className="w-full lg:w-auto bg-primary text-on-primary hover:bg-primary-container px-8 py-3.5 rounded-full font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-lg transition-all scale-95 active:scale-90 duration-200 cursor-pointer"
          >
            {t("banner.cta")}
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
