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
        ],
        paymentResultMessage: ''
   },

   mutations:{
       setPaymentResult(state, result){
            console.log(result)
            state.paymentResultMessage = result.charge.outcome.seller_message
       }
   },

   actions:{
        async pay({commit}, total){
            let response = await fetch('/rest/pay', {
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
            commit('setPaymentResult', result)
        },
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
            console.log('result', result)
            return stripe.redirectToCheckout({ sessionId: result.id });
            // commit('setPaymentResult', result)
        }
   }
})

export default store