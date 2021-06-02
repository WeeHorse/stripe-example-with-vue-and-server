<template>
  <main> 
    <h1>{{title}}</h1>
    <Checkout/>
  </main>
</template>

<script>
import Checkout from '../src/components/Checkout.vue'

export default{
  data(){
    return {
      title: "Ye Olde Shoppe"
    }
  },
  components:{
    Checkout
  }
}

</script>

