"use client"

import * as React from "react"
import Image from "next/image"
import { Share2, Mail, Send, Check } from "lucide-react"
import { useTranslations } from "next-intl"

export function Footer() {
  const t = useTranslations("Footer")
  const [email, setEmail] = React.useState("")
  const [isSubscribed, setIsSubscribed] = React.useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes("@")) return
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => {
      setIsSubscribed(false)
    }, 4000)
  }

  return (
    <footer className="bg-surface py-16 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column (Brand) */}
        <div className="md:col-span-4 flex flex-col items-start">
          <div className="flex items-center gap-2 mb-6">
            <Image
              alt="TraceFlow Logo"
              className="h-8 w-auto object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuABnlsj4eHX_2IWbjM_zYzTmwff85EmKp5aCyt3N5tUwn1xP_IX7qQe11JpBFxbKT9XsBxarh35DzYcWZDtVxzoDZe19cwOhbiUSZ4kfin2OoBnWOWNvpk1Ei64T7tuzrdPUZxLLgEycUyO067mz1Uhf-W9ynOlctQrqqcUxppaOBd12MtsM9qlrVISI7qGrJdNbrWA8VPh2vBwKJSOLhV2hKqHTuG4h6fMdiA9pg6QRyiQjMOae0PQ5Kc4USUM2WjTMQ"
              width={32}
              height={32}
            />
            <span className="font-sans text-lg font-bold text-primary">
              TraceFlow
            </span>
          </div>
          <p className="font-sans text-sm text-on-surface-variant max-w-sm mb-6 leading-relaxed">
            {t("description")}
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-primary-container/5 hover:bg-primary hover:text-on-primary flex items-center justify-center text-primary transition-all duration-300 border border-primary-container/10"
              href="#"
              aria-label="Share page"
            >
              <Share2 className="h-4 w-4" />
            </a>
            <a
              className="w-10 h-10 rounded-full bg-primary-container/5 hover:bg-primary hover:text-on-primary flex items-center justify-center text-primary transition-all duration-300 border border-primary-container/10"
              href="mailto:contact@traceflow.consulting"
              aria-label="Email Us"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2 (Company links) */}
        <div className="md:col-span-2">
          <h5 className="font-sans text-sm font-bold text-primary mb-6">
            {t("headers.company")}
          </h5>
          <ul className="space-y-4 font-sans text-sm text-on-surface-variant">
            <li>
              <a href="#solutions" className="hover:text-primary transition-colors">
                Soluciones
              </a>
            </li>
            <li>
              <a href="#process" className="hover:text-primary transition-colors">
                Proceso
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:text-primary transition-colors">
                Por Qué Nosotros
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 (Support links) */}
        <div className="md:col-span-2">
          <h5 className="font-sans text-sm font-bold text-primary mb-6">
            {t("headers.support")}
          </h5>
          <ul className="space-y-4 font-sans text-sm text-on-surface-variant">
            <li>
              <a href="#diagnosis" className="hover:text-primary transition-colors">
                Contacto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary transition-colors">
                Términos de Servicio
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 (Newsletter form) */}
        <div className="md:col-span-4">
          <h5 className="font-sans text-sm font-bold text-primary mb-6">
            {t("headers.newsletter")}
          </h5>
          <p className="font-sans text-sm text-on-surface-variant mb-4 leading-relaxed">
            {t("newsletter.text")}
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full max-w-md">
            <input
              className="flex-1 px-4 py-2 text-sm rounded-lg bg-white border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              placeholder={t("newsletter.placeholder")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubscribed}
            />
            <button
              className="bg-primary text-on-primary hover:bg-primary-container px-4 py-2 rounded-lg font-semibold text-sm transition-colors flex items-center justify-center shrink-0 disabled:bg-success disabled:text-on-secondary"
              type="submit"
              disabled={isSubscribed}
            >
              {isSubscribed ? <Check className="h-4 w-4" /> : t("newsletter.button")}
            </button>
          </form>
          {isSubscribed && (
            <span className="block text-xs font-semibold text-secondary-container mt-2 animate-in fade-in slide-in-from-top-1 duration-200">
              {t("newsletter.success")}
            </span>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 mt-16 pt-8 border-t border-outline-variant/20 text-center">
        <p className="font-sans text-xs text-on-surface-variant">
          {t("copyright")}
        </p>
      </div>
    </footer>
  )
}
