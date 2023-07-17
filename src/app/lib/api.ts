export interface IEmailProps {
  name?: string
  email?: string
  message?: string
}

export const sendContactForm = async (data: IEmailProps) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })

  return response.status === 200
    ? {
        status: 200,
        message:
          'Thanks, your message has been delivered. I will contact you soon!',
      }
    : {
        status: response.status,
        message: 'Sorry, your email was not sent!',
      }
}
