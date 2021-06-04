<template>
    <div class="intro text">
        <h2>{{title}}</h2>

        <ul>
            <li v-for="(item, i) in items" :key="i">
                {{item.title}} {{item.amount}} x {{item.price}} = {{item.amount * item.price}}
            </li>            
        </ul>
        <p>Total: {{total}}</p>

        <button @click="checkout">Checkout</button>
        
        <button @click="pay">Pay</button>

        <p>{{paymentResultMessage}}</p>
    </div>
</template>

<script>

export default{
    data(){
        return {
            title: "Checkout"
        }
    },
    computed:{
        items(){
            return this.$store.state.cartItems
        },
        total(){
            let t = 0
            for(let item of this.items){
                t = t + item.price * item.amount
            }
            return t
        },
        paymentResultMessage(){
            return this.$store.state.paymentResultMessage
        }
    },
    methods:{
        pay(){
            this.$store.dispatch('pay', this.total)
        },
        checkout(){
            this.$store.dispatch('checkout', this.total)
        }
    }
}
</script>
