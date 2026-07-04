"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"
import {
  Globe,
  MousePointerClick,
  Users,
  Calendar,
  Cpu,
  Cloud,
  Database,
  Terminal,
} from "lucide-react"

export function Services() {
  const t = useTranslations("Services")
  const shouldReduceMotion = useReducedMotion()

  const services = [
    {
      key: "websites",
      icon: Globe,
    },
    {
      key: "landings",
      icon: MousePointerClick,
    },
    {
      key: "crm",
      icon: Users,
    },
    {
      key: "appointments",
      icon: Calendar,
    },
    {
      key: "automation",
      icon: Cpu,
    },
    {
      key: "cloud",
      icon: Cloud,
    },
    {
      key: "aws",
      icon: Database,
    },
    {
      key: "software",
      icon: Terminal,
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
    <section className="bg-surface py-20 md:py-32 border-b border-outline-variant/20" id="solutions">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-sans text-xs font-semibold uppercase tracking-widest text-secondary-container bg-primary-container/10 px-4 py-1.5 rounded-full inline-block mb-4 border border-primary-container/10"
          >
            {t("badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-3xl sm:text-4xl font-bold text-primary tracking-tight"
          >
            {t("title")}
          </motion.h2>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.key}
                variants={cardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -6 }}
                className="glass p-8 rounded-2xl ambient-shadow border border-outline-variant/20 hover:border-secondary/20 transition-all duration-300 flex flex-col items-start bg-white/40"
              >
                {/* Icon Container */}
                <div className="w-12 h-12 bg-primary-container/5 rounded-xl flex items-center justify-center mb-6 text-primary border border-primary-container/10">
                  <Icon className="h-6 w-6" />
                </div>
                {/* Title */}
                <h3 className="font-sans text-lg font-bold mb-3 text-primary">
                  {t(`items.${service.key}.title`)}
                </h3>
                {/* Description */}
                <p className="text-on-surface-variant font-sans text-sm leading-relaxed">
                  {t(`items.${service.key}.description`)}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
