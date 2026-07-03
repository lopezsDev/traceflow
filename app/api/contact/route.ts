import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Simple server-side validation checks
    const { name, email, company, message, type } = body
    if (!name || !email || !company || !message || !type) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      )
    }

    // Simulate database write / email dispatch latency
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Log the received consultation request for developer verification
    console.log(`[Contact API] Received request (${type}):`, {
      name,
      email,
      company,
      phone: body.phone || "N/A",
      message,
    })

    return NextResponse.json({
      success: true,
      message: "Consultation request received successfully",
    })
  } catch (error) {
    console.error("[Contact API] error:", error)
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
}
