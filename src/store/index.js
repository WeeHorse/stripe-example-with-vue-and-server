import { createStore } from "vuex" 
import {loadStripe} from '@stripe/stripe-js';

const store = createStore({
   state:{
        cartItems:[
            {
                id:1,
                amount:2,
                price: 120,
                title: "Shiny thing"
            },
            {
                id:1,
                amount:1,
                price: 85,
                title: "Dull thing"
            }
        ]
   },

   mutations:{

   },

   actions:{
        async checkout({commit}, total){
            const stripe = await loadStripe('pk_test_a3ai0mjFbb7R4JzyfXxZ8YcL');
            //const elements = stripe.elements();
            let response = await fetch('/rest/create-checkout-session', {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(
                    {
                        sumToCharge: total,
                        email: 'ben@node.se'
                    }
                )
            })
            let result = await response.json()
            console.log('Redirecting to stripe checkout..', result)
            return stripe.redirectToCheckout({ sessionId: result.id });            
        }
   }
})

export default store