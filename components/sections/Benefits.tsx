"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Compass, ShieldCheck, Cpu, Cloud, Briefcase } from "lucide-react"

export function Benefits() {
  const t = useTranslations("Benefits")
  const shouldReduceMotion = useReducedMotion()

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 md:py-32 bg-background" id="why-us">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-3xl sm:text-4xl font-bold text-primary mb-16 text-center tracking-tight"
        >
          {t("title")}
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Bento Card 1: Scalable Architecture */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            className="md:col-span-3 lg:col-span-4 glass p-8 sm:p-10 rounded-3xl ambient-shadow flex flex-col justify-between border border-outline-variant/20 bg-white/40"
          >
            <div>
              <div className="mb-8 text-primary">
                <Compass className="h-12 w-12 stroke-[1.5]" />
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold mb-4 text-primary">
                {t("items.architecture.title")}
              </h3>
              <p className="text-on-surface-variant font-sans text-sm sm:text-base leading-relaxed max-w-xl">
                {t("items.architecture.description")}
              </p>
            </div>
          </motion.div>

          {/* Bento Card 2: Security First (Dark Background) */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            className="md:col-span-3 lg:col-span-2 p-8 sm:p-10 rounded-3xl ambient-shadow bg-primary text-on-primary border-none flex flex-col justify-between"
          >
            <div>
              <div className="mb-8 text-secondary-container">
                <ShieldCheck className="h-12 w-12 stroke-[1.5]" />
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-bold mb-4 text-on-primary">
                {t("items.security.title")}
              </h3>
              <p className="text-on-primary/80 font-sans text-sm sm:text-base leading-relaxed">
                {t("items.security.description")}
              </p>
            </div>
          </motion.div>

          {/* Bento Card 3: Intelligent Automation */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            className="md:col-span-2 glass p-8 sm:p-10 rounded-3xl ambient-shadow flex flex-col justify-between border border-outline-variant/20 bg-white/40"
          >
            <div>
              <div className="mb-6 text-secondary-container">
                <Cpu className="h-10 w-10 stroke-[1.5]" />
              </div>
              <h4 className="font-sans text-lg sm:text-xl font-bold mb-2 text-primary">
                {t("items.automation.title")}
              </h4>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                {t("items.automation.description")}
              </p>
            </div>
          </motion.div>

          {/* Bento Card 4: Cloud-First Strategy */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            className="md:col-span-2 glass p-8 sm:p-10 rounded-3xl ambient-shadow flex flex-col justify-between border border-outline-variant/20 bg-white/40"
          >
            <div>
              <div className="mb-6 text-secondary-container">
                <Cloud className="h-10 w-10 stroke-[1.5]" />
              </div>
              <h4 className="font-sans text-lg sm:text-xl font-bold mb-2 text-primary">
                {t("items.cloud.title")}
              </h4>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                {t("items.cloud.description")}
              </p>
            </div>
          </motion.div>

          {/* Bento Card 5: Business Focused */}
          <motion.div
            variants={cardVariants}
            whileHover={shouldReduceMotion ? {} : { y: -5 }}
            className="md:col-span-2 glass p-8 sm:p-10 rounded-3xl ambient-shadow flex flex-col justify-between border border-outline-variant/20 bg-white/40"
          >
            <div>
              <div className="mb-6 text-secondary-container">
                <Briefcase className="h-10 w-10 stroke-[1.5]" />
              </div>
              <h4 className="font-sans text-lg sm:text-xl font-bold mb-2 text-primary">
                {t("items.business.title")}
              </h4>
              <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                {t("items.business.description")}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
