"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useTranslations } from "next-intl"

export function Process() {
  const t = useTranslations("Process")
  const shouldReduceMotion = useReducedMotion()

  const steps = [
    {
      id: 1,
      key: "diagnosis",
      bgColor: "bg-primary text-on-primary",
      align: "left",
    },
    {
      id: 2,
      key: "analysis",
      bgColor: "bg-secondary-container text-on-secondary-fixed",
      align: "right",
    },
    {
      id: 3,
      key: "solution",
      bgColor: "bg-primary text-on-primary",
      align: "left",
    },
    {
      id: 4,
      key: "implementation",
      bgColor: "bg-secondary-container text-on-secondary-fixed",
      align: "right",
    },
  ]

  return (
    <section className="py-20 md:py-32 relative bg-surface overflow-hidden border-b border-outline-variant/20" id="process">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-sans text-xs font-semibold uppercase tracking-widest text-primary mb-4 block"
          >
            {t("badge")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-sans text-3xl sm:text-4xl font-bold text-primary tracking-tight"
          >
            {t("title")}
          </motion.h2>
        </div>

        {/* Timeline Container */}
        <div className="relative process-line max-w-4xl mx-auto space-y-24">
          {steps.map((step) => {
            const isLeft = step.align === "left"

            return (
              <div
                key={step.id}
                className={`relative z-10 flex flex-col items-center gap-8 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Text Column */}
                <div className={`w-full md:w-1/2 text-center ${isLeft ? "md:text-right" : "md:text-left"}`}>
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft
                        ? shouldReduceMotion ? 0 : -35
                        : shouldReduceMotion ? 0 : 35,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                  >
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-primary mb-2">
                      {t(`steps.${step.key}.title`)}
                    </h3>
                    <p className={`text-on-surface-variant font-sans text-sm leading-relaxed max-w-sm mx-auto ${
                      isLeft ? "md:ml-auto md:mr-0" : "md:mr-auto md:ml-0"
                    }`}>
                      {t(`steps.${step.key}.description`)}
                    </p>
                  </motion.div>
                </div>

                {/* Circle Number Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl shadow-lg border-4 border-white ${step.bgColor} shrink-0 md:mx-8`}
                >
                  {step.id}
                </motion.div>

                {/* Empty Placeholder Column */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
