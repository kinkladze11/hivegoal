// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2020-08-27',
})
export default async function handler(req, res) {
  const id = req.body.id
  const session = await stripe.checkout.sessions.retrieve(id)
  res.send({
    amount: session.amount_total,
    status: session.status,
    email: session.customer_email,
    createdAt: session.created * 1000,
  })
}
