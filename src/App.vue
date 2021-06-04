<template>   
  <div>
    <header>
      <h1>{{title}}</h1>
      <nav>
        <router-link to="/">Home</router-link> | 
        <router-link to="/checkout">Checkout</router-link>
      </nav>
    </header>
    <main> 
      <router-view/>
    </main>
  </div>
</template>

<script>
export default{
  data(){
    return {
      title: "Ye Olde Shoppe"
    }
  }
}

</script>
