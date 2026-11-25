'use server'

import { Resend } from 'resend'

export async function submitContact(formData: FormData) {
  const name    = (formData.get('name')    as string | null)?.trim()
  const company = (formData.get('company') as string | null)?.trim()
  const message = (formData.get('message') as string | null)?.trim()

  if (!name || !message) {
    return { success: false, error: 'Name and message are required.' }
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Cunning AI <noreply@cunning-ai.com>',
      to: 'max@cunning-ai.com',
      subject: `New enquiry from ${name}${company ? ` · ${company}` : ''}`,
      text: [`Name: ${name}`, `Company: ${company || '—'}`, '', message].join('\n'),
    })
    return { success: true, error: undefined }
  } catch {
    return { success: false, error: 'Something went wrong. Please email max@cunning-ai.com directly.' }
  }
}
