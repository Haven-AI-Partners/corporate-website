"use server"

import { z } from "zod"
import { Resend } from "resend"
import { sendSlackMessage } from "@/lib/slack"

const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
})

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContactForm(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData,
) {
  const parsed = schema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    return { success: false, error: "validation" }
  }

  const { firstName, lastName, email, message } = parsed.data
  const name = `${firstName} ${lastName}`

  try {
    await resend.emails.send({
      from: "Haven AI Partners <noreply@havenaipartners.com>",
      to: "info@havenaipartners.com",
      replyTo: email,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })

    // Fire-and-forget Slack notification
    sendSlackMessage(
      [
        {
          type: "header",
          text: {
            type: "plain_text",
            text: ":envelope: New Contact Form Inquiry",
            emoji: true,
          },
        },
        {
          type: "section",
          fields: [
            { type: "mrkdwn", text: `*Name:*\n${name}` },
            { type: "mrkdwn", text: `*Email:*\n${email}` },
          ],
        },
        { type: "divider" },
        {
          type: "section",
          text: { type: "mrkdwn", text: `*Message:*\n${message}` },
        },
      ],
      `New inquiry from ${name} (${email})`,
    )

    return { success: true }
  } catch {
    return { success: false, error: "send" }
  }
}
