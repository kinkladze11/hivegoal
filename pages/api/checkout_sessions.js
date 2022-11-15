import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
})
export function formatAmountForStripe(amount, currency) {
  let numberFormat = new Intl.NumberFormat(['en-US'], {
    style: 'currency',
    currency: currency,
    currencyDisplay: 'symbol',
  })
  const parts = numberFormat.formatToParts(amount)
  let zeroDecimalCurrency = true
  for (let part of parts) {
    if (part.type === 'decimal') {
      zeroDecimalCurrency = false
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount * 100)
}
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const amount = req.body.amount
    const userEmail = req.body.userEmail
    const subscriptionName = req.body.subscriptionName
    try {
      // Validate the amount that was passed from the client.
      if (!(amount >= 0 && amount <= 1000)) {
        throw new Error('Invalid amount.')
      }
      // Create Checkout Sessions from body params.
      const params = {
        submit_type: 'donate',
        payment_method_types: ['card'],
        customer_email: userEmail,
        line_items: [
          {
            name: subscriptionName,
            amount: formatAmountForStripe(amount, 'usd'),
            currency: 'eur',
            quantity: 1,
          },
        ],
        success_url: `${req.headers.origin}/verify_payment?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}/subscription`,
      }
      const checkoutSession = await stripe.checkout.sessions.create(params)

      res.status(200).json(checkoutSession)
    } catch (err) {
      console.log(err)
      const errorMessage = err.message
      res.status(500).json({ statusCode: 500, message: errorMessage })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
