import { Hero } from "@/components/sections/Hero"
import { Services } from "@/components/sections/Services"
import { Problems } from "@/components/sections/Problems"
import { Process } from "@/components/sections/Process"
import { Benefits } from "@/components/sections/Benefits"
import { CTA } from "@/components/sections/CTA"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  // Schema structured data definitions
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TraceFlow",
    "url": `https://traceflow.consulting/${locale}`,
    "logo": "https://lh3.googleusercontent.com/aida-public/AB6AXuBgWaA90AILD1wMN1JSHJmRPwOYbrQrh9MNnyqjS0WFlCxB0Lm9OqfE5mlzYpK5O2Vg3YqACSrgq6pKhKWynETdlFCQwSEzN_0cunXyTUgZEvYS0h_uFY8FxCq-lBsVrk43BhZM5mWCKfiCzfqXynX4e71J8GDj7fMUVJUKVVICegLutQ0YERdzI7DhIu35IPRsaEcsD9PiUlbBdhgUy1OCyesOEy-nioPOloxywIxKY0V8WiqaZBgZgtVRdCKC2sLSYksLVpyOFIkqwg",
    "description":
      locale === "es"
        ? "Ayudamos a las empresas a organizar sus operaciones, automatizar tareas repetitivas e incrementar sus ventas."
        : "We help businesses organize operations, automate repetitive tasks and increase sales.",
  }

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TraceFlow Technology Consulting",
    "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBgWaA90AILD1wMN1JSHJmRPwOYbrQrh9MNnyqjS0WFlCxB0Lm9OqfE5mlzYpK5O2Vg3YqACSrgq6pKhKWynETdlFCQwSEzN_0cunXyTUgZEvYS0h_uFY8FxCq-lBsVrk43BhZM5mWCKfiCzfqXynX4e71J8GDj7fMUVJUKVVICegLutQ0YERdzI7DhIu35IPRsaEcsD9PiUlbBdhgUy1OCyesOEy-nioPOloxywIxKY0V8WiqaZBgZgtVRdCKC2sLSYksLVpyOFIkqwg",
    "url": `https://traceflow.consulting/${locale}`,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": locale === "es" ? "MX" : "US",
    },
  }

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <Hero />
      <Services />
      <Problems />
      <Process />
      <Benefits />
      <CTA />
    </>
  )
}
