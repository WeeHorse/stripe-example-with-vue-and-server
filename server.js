// express
let express = require('express')
const app = express()

// läser in modulen body-parser
const bodyParser = require('body-parser')
// registrerar den som middleware
app.use( bodyParser.json() )

// stripe
const Stripe = require('stripe')
const stripe = new Stripe('sk_test_NzHkwYglPCxxPr9NXGgBrhTy') // stripe.com api secret key

// route for payment
app.post('/rest/pay', async (request, response) => {
  let email = request.body.email

  // PAY WITH STRIPE
  // create / access a stripe customer
  let customer = await stripe.customers.create({
    email: email,
  });

  // set payment method
  let source = await stripe.customers.createSource(customer.id, {
    source: 'tok_visa'
  });

  // charge payment
  let charge = await stripe.charges.create({
    amount: request.body.sumToCharge * 100, // SEK ören
    currency: 'SEK',
    customer: source.customer
  });

  response.json({customer, source, charge})

})

console.log(process.argv)
// select port for server
let port = 3000
if(process.argv[2] == "--port"){
    port = process.argv[3]
}

// start server
app.listen(port, async () => {
  console.log('server running on port ' + port)
})

