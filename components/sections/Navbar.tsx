"use client"

import * as React from "react"
import Image from "next/image"
import { Menu, X, Globe } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/routing"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { openDiagnosisModal } from "./DiagnosisModal"

export function Navbar() {
  const t = useTranslations("Navbar")
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    // Run once on load to catch initial state
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLanguageChange = () => {
    const nextLocale = locale === "es" ? "en" : "es"
    router.replace(pathname, { locale: nextLocale })
  }

  const navLinks = [
    { label: t("solutions"), href: "#solutions" },
    { label: t("process"), href: "#process" },
    { label: t("whyUs"), href: "#why-us" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md border-b border-outline-variant/30"
          : "glass shadow-sm border-b border-white/20"
      )}
    >
      <div className="flex justify-between items-center px-6 md:px-8 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <Image
            alt="TraceFlow Logo"
            className="h-8 md:h-10 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgWaA90AILD1wMN1JSHJmRPwOYbrQrh9MNnyqjS0WFlCxB0Lm9OqfE5mlzYpK5O2Vg3YqACSrgq6pKhKWynETdlFCQwSEzN_0cunXyTUgZEvYS0h_uFY8FxCq-lBsVrk43BhZM5mWCKfiCzfqXynX4e71J8GDj7fMUVJUKVVICegLutQ0YERdzI7DhIu35IPRsaEcsD9PiUlbBdhgUy1OCyesOEy-nioPOloxywIxKY0V8WiqaZBgZgtVRdCKC2sLSYksLVpyOFIkqwg"
            width={40}
            height={40}
            priority
          />
          <span className="font-sans text-xl md:text-2xl font-bold text-primary">
            {t("logo")}
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-on-surface-variant hover:text-secondary-container transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* Language Switcher */}
          <button
            onClick={handleLanguageChange}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-surface-container-low text-sm font-semibold text-primary transition-colors cursor-pointer"
            aria-label="Switch Language"
          >
            <Globe className="h-4 w-4" />
            <span>{locale === "es" ? "EN" : "ES"}</span>
          </button>

          {/* CTA */}
          <Button
            size="sm"
            onClick={() => openDiagnosisModal("diagnosis")}
          >
            {t("bookDiagnosis")}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          {/* Mobile Language Switcher */}
          <button
            onClick={handleLanguageChange}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full hover:bg-surface-container-low text-xs font-bold text-primary transition-colors"
            aria-label="Switch Language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span>{locale === "es" ? "EN" : "ES"}</span>
          </button>

          <button
            className="text-primary focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t("menuClose") : t("menuOpen")}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[100%] left-0 w-full bg-surface border-b border-outline-variant/30 px-6 py-6 shadow-xl flex flex-col gap-5 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-primary hover:text-secondary-container transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            className="w-full justify-center"
            onClick={() => {
              setMobileMenuOpen(false)
              openDiagnosisModal("diagnosis")
            }}
          >
            {t("bookDiagnosis")}
          </Button>
        </div>
      )}
    </nav>
  )
}
