export interface ContactFormInput {
  name: string
  email: string
  company: string
  phone?: string
  message: string
  type: "diagnosis" | "quote"
}

export interface ContactFormResponse {
  success: boolean
  message?: string
}

/**
 * Submits the contact/diagnosis request to the backend API route.
 */
export async function submitContactForm(
  data: ContactFormInput
): Promise<ContactFormResponse> {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    return result as ContactFormResponse
  } catch (error) {
    console.error("Error submitting contact form:", error)
    return {
      success: false,
      message: error instanceof Error ? error.message : "Internal Server Error",
    }
  }
}
