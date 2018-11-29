<script src='./headerVM.js'></script>
<style src='./header.sass' lang='sass'></style>

<template>
  <div id='main-header' class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-md-6"><img src="@/assets/images/logo.png"></div>
        <div class="col-md-5 d-flex align-items-center text-right">
          <router-link to="/">Home</router-link>
          <router-link to="/contact">Contact</router-link>
          <router-link to="/shops">Shops</router-link>
        </div>
        <div class="col-md-1 d-flex align-items-center text-right">
          <button @click='onLogout' v-if='appLogin'> Logout </button>
          <button v-else @click='onLogin'> Login </button>
        </div>
      </div>
    </div>
  </div>
</template>
