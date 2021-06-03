<template>
  <div>
    <header>
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
