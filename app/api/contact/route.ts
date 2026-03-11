import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? '')
  const RECIPIENT = process.env.LEAD_EMAIL ?? 'contact@varefinance.com'

  try {
    const body = await request.json()
    const { name, phone, email, loanType, currentRate, loanBalance } = body

    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1b3a6b; padding: 24px; border-radius: 8px 8px 0 0;">
          <h2 style="color: #c8a032; margin: 0; font-size: 20px;">New Lead — Varefinance.com</h2>
        </div>
        <div style="background: #f8f9fa; padding: 24px; border: 1px solid #e0e0e0; border-top: none; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 10px 0; font-weight: bold; color: #1a2b4a; width: 40%;">Name</td>
              <td style="padding: 10px 0; color: #374151;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 10px 0; font-weight: bold; color: #1a2b4a;">Phone</td>
              <td style="padding: 10px 0; color: #374151;">${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 10px 0; font-weight: bold; color: #1a2b4a;">Email</td>
              <td style="padding: 10px 0; color: #374151;">${email}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 10px 0; font-weight: bold; color: #1a2b4a;">Loan Type</td>
              <td style="padding: 10px 0; color: #374151;">${loanType || 'Not specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e0e0e0;">
              <td style="padding: 10px 0; font-weight: bold; color: #1a2b4a;">Current Rate</td>
              <td style="padding: 10px 0; color: #374151;">${currentRate || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #1a2b4a;">Loan Balance</td>
              <td style="padding: 10px 0; color: #374151;">${loanBalance || 'Not provided'}</td>
            </tr>
          </table>
          <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
            Submitted via Varefinance.com on ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET
          </p>
        </div>
      </div>
    `

    await resend.emails.send({
      from: 'Varefinance.com <no-reply@varefinance.com>',
      to: RECIPIENT,
      replyTo: email,
      subject: `New VA Loan Lead: ${name} — ${loanType || 'Inquiry'}`,
      html,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact form error:', err)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
