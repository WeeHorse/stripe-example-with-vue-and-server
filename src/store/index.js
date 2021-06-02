import { createStore } from "vuex" 

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
                        sumToCharge: total
                    }
                )
            })
            let result = await response.json()
            commit('setPaymentResult', result)
        }

   }
})

export default store