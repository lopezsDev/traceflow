"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useTranslations } from "next-intl"
import { CheckCircle2, Loader2 } from "lucide-react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { submitContactForm } from "@/lib/contact-api"

// We create a global register for modal trigger callbacks
type ModalState = {
  isOpen: boolean
  mode: "diagnosis" | "quote"
}

let modalListeners = new Set<(state: ModalState) => void>()

export function openDiagnosisModal(mode: "diagnosis" | "quote" = "diagnosis") {
  modalListeners.forEach((listener) => listener({ isOpen: true, mode }))
}

export function closeDiagnosisModal() {
  modalListeners.forEach((listener) =>
    listener({ isOpen: false, mode: "diagnosis" })
  )
}

export function DiagnosisModal() {
  const t = useTranslations("DiagnosisModal")
  const [state, setState] = React.useState<ModalState>({
    isOpen: false,
    mode: "diagnosis",
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSuccess, setIsSuccess] = React.useState(false)

  React.useEffect(() => {
    const listener = (s: ModalState) => {
      setState(s)
      if (s.isOpen) {
        setIsSuccess(false)
      }
    }
    modalListeners.add(listener)
    return () => {
      modalListeners.delete(listener)
    }
  }, [])

  const formSchema = z.object({
    name: z.string().min(3, { message: t("errors.name") }),
    email: z.string().email({ message: t("errors.email") }),
    company: z.string().min(1, { message: t("errors.company") }),
    phone: z.string().optional(),
    message: z.string().min(10, { message: t("errors.message") }),
  })

  type FormValues = z.infer<typeof formSchema>

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  })

  // Reset form when modal opens
  React.useEffect(() => {
    if (state.isOpen) {
      form.reset({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      })
    }
  }, [state.isOpen, form])

  async function onSubmit(values: FormValues) {
    setIsSubmitting(true)
    try {
      const response = await submitContactForm({
        ...values,
        type: state.mode,
      })
      if (response.success) {
        setIsSuccess(true)
      }
    } catch (error) {
      console.error("Failed to submit form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog
      open={state.isOpen}
      onOpenChange={(open) => {
        if (!open) closeDiagnosisModal()
      }}
    >
      <DialogContent className="sm:max-w-[500px]">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
            <CheckCircle2 className="h-16 w-16 text-secondary" />
            <h3 className="text-2xl font-bold text-primary">
              {t("success.title")}
            </h3>
            <p className="text-on-surface-variant max-w-sm">
              {t("success.message")}
            </p>
            <Button
              className="mt-6"
              onClick={closeDiagnosisModal}
            >
              Cerrar
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {state.mode === "quote" ? t("quoteTitle") : t("title")}
              </DialogTitle>
              <DialogDescription>
                {state.mode === "quote" ? t("quoteSubtitle") : t("subtitle")}
              </DialogDescription>
            </DialogHeader>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 mt-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("fields.name")} *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Doe"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("fields.email")} *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("fields.company")} *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Acme Corp"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("fields.phone")}</FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("fields.message")} *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="..."
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-end gap-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={closeDiagnosisModal}
                    disabled={isSubmitting}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="min-w-[120px]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {t("fields.sending")}
                      </>
                    ) : (
                      t("fields.submit")
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
