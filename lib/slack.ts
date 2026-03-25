export async function sendSlackMessage(
  blocks: unknown[],
  text: string,
): Promise<void> {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL
  if (!webhookUrl) {
    console.warn(
      "[slack] SLACK_WEBHOOK_URL is not set -- skipping notification",
    )
    return
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, blocks }),
    })
    if (!res.ok) {
      console.error(
        `[slack] Webhook responded with ${res.status}: ${await res.text()}`,
      )
    }
  } catch (err) {
    console.error("[slack] Failed to send message:", err)
  }
}
